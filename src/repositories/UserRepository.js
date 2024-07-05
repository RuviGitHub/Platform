import EmailRecord from "../models/EmailRecord.js";
import PlatformUser from "../models/PlatformUser.js";
import ProfileColor from "../models/ProfileColor.js";
import WorkspaceUser from "../models/WorkspaceUser.js";
import Token from "../models/Token.js";
import bcrypt from "bcryptjs";

class UserRepository {
  async verifyOTPRepository(dto) {
    try {
      const existingEmailRecord = await EmailRecord.findOne({
        email: dto.email,
        workspaceId: null,
      });
      if (existingEmailRecord.otp == dto.otp) {
        return {
          success: true,
          message: "Email verified.",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Invalid OTP.",
          data: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async updatePasswordRepository(dto) {
    try {
      // Check if user with given email exists
      const user = await PlatformUser.findOne({ email: dto.email });
      if (!user) {
        return {
          success: false,
          message: "User not found.",
          data: null,
        };
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      // Update the user's password
      const updatedEntity = await PlatformUser.findOneAndUpdate(
        { email: dto.email },
        { password: hashedPassword },
        { new: true }
      );

      if (updatedEntity) {
        return {
          success: true,
          message: "Password updated.",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Password update error.",
          data: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async inviteUserRepository(dto) {
    try {
      const platformUser = new PlatformUser({
        email: dto.email,
        password: dto.password,
      });
      const savedPlatformUser = await platformUser.save();
      const user = {
        platformUserId: platformUser._id,
        workspaceId: dto.workspaceId,
        email: dto.email,
        profileColorId: dto.profileColorId,
        role: dto.role,
        userStatus: 2,
        lastEmailSentDate: new Date(),
        pendingEmailStatus: 1,
        invitationToken: dto.invitationToken || "token",
        joinDate: new Date(),
      };
      const workspaceUser = new WorkspaceUser(user);
      const savedWorkspaceUser = await workspaceUser.save();

      return {
        success: false,
        message: error.message,
        data: {
          savedPlatformUser,
          savedWorkspaceUser,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllUsersPaginatedRepository(dto) {
    try {
      const skip = (dto.page - 1) * dto.limit;

      let sortField = dto.sort || "createdAt";
      const sortOrder = dto.order || "asc";

      const allowedSortFields = ["createdAt", "email"];
      if (!allowedSortFields.includes(sortField)) {
        return {
          success: false,
          message: "Invalid sort.",
          data: null,
        };
      }

      const query = {
        isActive: true,
      };

      if (dto.search) {
        query.fullName = { $regex: dto.search, $options: "i" };
      }

      if (dto.workspaceId) {
        query.workspaceId = dto.workspaceId;
      }

      const usersQuery = WorkspaceUser.find(query);

      // Apply sorting, skipping, and limiting
      usersQuery
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(dto.limit);

      const users = await usersQuery.exec();
      const totalUsers = await WorkspaceUser.countDocuments(query);

      return {
        success: true,
        message: "Users retrieved successfully.",
        data: {
          users,
          totalPages: Math.ceil(totalUsers / dto.limit),
          currentPage: dto.page,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async savePlatformUserRepository(dto) {
    try {
      const newUser = new PlatformUser(dto);
      const savedUser = await newUser.save();
      return {
        success: true,
        message: "PlatformUser registered.",
        data: savedUser,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  /* ------------------------- Helper Methods ------------------------- */
  async getPlatformUserByEmail(email) {
    try {
      const platformUser = await PlatformUser.findOne({
        email: email,
        isActive: true,
      });
      return platformUser;
    } catch (error) {
      console.error("Error in getPlatformUserByEmail:", error);
      return null;
    }
  }

  async saveEmailRecord(dto) {
    try {
      const existingRecord = await EmailRecord.findOne({ email: dto.email });
      console.log(dto.invitationToken,"Token")
      if (existingRecord) {
        let updatedFields = { otp: dto.otp, invitationToken: dto.invitationToken };

        const emailRecord = await EmailRecord.findOneAndUpdate(
          { email: email },
          { $set: updatedFields },
          { new: true }
        );

        return emailRecord;
      } else {
        const newEmailRecord = new EmailRecord({
          email: dto.email,
          otp: dto.otp,
          invitationToken: dto.invitationToken,
        });
        const savedRecord = await newEmailRecord.save();
        return savedRecord;
      }
    } catch (error) {
      console.error("Error in saveEmailRecord:", error);
      return null;
    }
  }

  async getEmailRecordByEmail(email) {
    try {
      const emailRecord = await EmailRecord.findOne({ email: email });
      return emailRecord;
    } catch (error) {
      console.error("Error in getEmailRecordByEmail:", error);
      return null;
    }
  }

  async updateToken(userId, token) {
    try {
      const updatedEntity = await Token.findOneAndUpdate(
        { userId },
        { token, createdAt: new Date() },
        { upsert: true, new: true }
      );
      return updatedEntity;
    } catch (error) {
      console.error("updateToken:", error);
      return null;
    }
  }

  async getRandomProfileColor() {
    try {
      const profileColors = await ProfileColor.find({ isActive: true });
      if (profileColors.length == 0) {
        console.log("No active profile colors available");
        return null;
      }

      const randomIndex = Math.floor(Math.random() * profileColors.length);
      return profileColors[randomIndex];
    } catch (error) {
      console.error("Error fetching random profile color:", error);
      return null;
    }
  }

  async updateIsFirstTimeLogin(email) {
    try {
      const platformUser = await PlatformUser.findOneAndUpdate(
        { email: email },
        { isFirstTimeLogin: false },
        { upsert: true }
      );
      return platformUser;
    } catch (error) {
      console.error("Error in updateIsFirstTimeLogin:", error);
      return null;
    }
  }
}

export default UserRepository;

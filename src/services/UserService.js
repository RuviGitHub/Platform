import UserRepository from "../repositories/UserRepository.js";
import EmailService from "./EmailService.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async verifyEmailService(dto) {
    try {
      // Check if email already exists
      const existingPlatformUser = await this.repository.getPlatformUserByEmail(
        dto.email
      );
      if (existingPlatformUser) {
        return {
          success: false,
          message: "Email already exists.",
          data: null,
        };
      }

      const response = await EmailService.sendVerifyEmail(dto.email);

      if (response.success) {
        await this.repository.saveEmailRecord({
          email: dto.email,
          otp: response.otp,
          invitationToken: null,
        });
        return {
          success: true,
          message: "Verification email sent.",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Verification email sending failed.",
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

  async verifyOTPService(dto) {
    try {
      const existingEmailRecord = await this.repository.getEmailRecordByEmail(
        dto.email
      );
      if (!existingEmailRecord) {
        return {
          success: false,
          message: "Email not found.",
          data: null,
        };
      }

      const response = await this.repository.verifyOTPRepository(dto);
      if (response) {
        return {
          success: response.success,
          message: response.message,
          data: response.data,
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

  async loginService(dto) {
    try {
      // Check if the user exists
      const user = await this.repository.getPlatformUserByEmail(dto.email);
      if (!user) {
        return {
          success: false,
          message: "User not found.",
          data: null,
        };
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(dto.password, user.password);
      if (!isPasswordValid) {
        return {
          success: false,
          message: "Incorrect username or password.",
          data: null,
        };
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "45m",
      });

      // Remove existing token for the user
      const updateToken = await this.repository.updateToken(user._id, token);

      if (updateToken == null) {
        return {
          success: false,
          message: "Session store failed.",
          data: null,
        };
      }

      // Exclude sensitive information from the user object
      const { password, ...userDetails } = user.toObject();

      //Update isFirstTimeLogin
      if (user.isFirstTimeLogin == true) {
        await this.repository.updateIsFirstTimeLogin(user.email);
      }
      return {
        success: true,
        message: "Login successful",
        data: { token, user: userDetails },
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async logoutService(dto) {
    try {
      // Check if the user exists
      const user = await this.repository.getPlatformUserByEmail(dto.email);
      if (!user) {
        return {
          success: false,
          message: "User not found.",
          data: null,
        };
      }

      // Remove existing token for the user
      const removedToken = await this.repository.removeToken(user._id, token);
      if (removedToken == null) {
        return {
          success: false,
          message: "Something went wrong",
          data: null,
        };
      }
      return {
        success: true,
        message: "Logout successful.",
        data: null,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async registerUserService(dto) {
    try {
      const response = await this.repository.registerUserRepository(dto);
      if (response) {
        return {
          success: response.success,
          message: response.message,
          data: response.data,
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

  async resetPassowrdService(dto) {
    try {
      // Check if email already exists
      const existingPlatformUser = await this.repository.getPlatformUserByEmail(
        dto.email
      );
      if (!existingPlatformUser) {
        return {
          success: false,
          message: "Email not found.",
          data: null,
        };
      }

      const response = await EmailService.sendVerifyEmail(dto.email);

      if (response.success) {
        await this.repository.saveEmailRecord({
          email: dto.email,
          otp: response.otp,
          invitationToken: null,
        });
        return {
          success: true,
          message: "Verification email sent.",
          data: null,
        };
      } else {
        return {
          success: false,
          message: "Verification email sending failed.",
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

  async updatePassowrdService(dto) {
    try {
      const response = await this.repository.updatePasswordRepository(dto);
      if (response) {
        return {
          success: response.success,
          message: response.message,
          data: response.data,
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

  async authService(dto) {
    try {
      // Check if the user exists
      const user = await this.repository.getPlatformUserByEmail(dto.email);
      if (!user) {
        return {
          success: false,
          message: "User not found.",
          data: null,
        };
      }

      // Exclude sensitive information from the user object
      const { password, ...userDetails } = user.toObject();

      return {
        success: true,
        message: "Auth data fetched.",
        data: userDetails,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async inviteUserService(dto) {
    try {
      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
      // Check if email already exists
      const existingPlatformUser = await this.repository.getPlatformUserByEmail(
        dto.email
      );
      if (existingPlatformUser) {
        return {
          success: false,
          message: "Email already exists.",
          data: null,
        };
      }

      if (dto.role == 0) {
        const email = await EmailService.inviteNormalUser(dto.email);

        if (email.success) {
          // Hash the password
          const hashedPassword = await bcrypt.hash(
            email.otp.toString(),
            SALT_ROUNDS
          );
          dto.password = hashedPassword;
          // Fetch a random profile color
          const randomProfileColor =
            await this.repository.getRandomProfileColor();
          if (randomProfileColor == null) {
            return {
              success: false,
              message: "No profile colors available.",
              data: null,
            };
          }
          dto.profileColorId = randomProfileColor._id;
          dto.otp = email.otp || null;
          dto.invitationToken = email.invitationLink || null;

          await this.repository.saveEmailRecord(dto);
          await this.repository.inviteUserRepository(dto);
          return {
            success: true,
            message: "Verification email sent.",
            data: null,
          };
        } else {
          return {
            success: false,
            message: "Verification email sending failed.",
            data: null,
          };
        }
      } else if (dto.role == 1) {
        const email = await EmailService.inviteAdminUser(dto.email);
        if (email.success) {
          // Fetch a random profile color
          const randomProfileColor =
            await this.repository.getRandomProfileColor();
          if (randomProfileColor == null) {
            return {
              success: false,
              message: "No profile colors available.",
              data: null,
            };
          }
          dto.profileColorId = randomProfileColor._id;
          dto.otp = email.otp || null;
          dto.invitationToken = email.invitationLink || null;
          await this.repository.saveEmailRecord(dto);
          await this.repository.inviteUserRepository(dto);
          return {
            success: true,
            message: "Verification email sent.",
            data: null,
          };
        } else {
          return {
            success: false,
            message: "Verification email sending failed.",
            data: null,
          };
        }
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllUsersPaginatedService(dto) {
    try {
      const response = await this.repository.getAllUsersPaginatedRepository(
        dto
      );
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }
}

export default UserService;

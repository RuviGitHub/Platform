import WorkspaceRepository from "../repositories/WorkspaceRepository.js";
import stripe from "../configs/stripe.js";
import UserRepository from "../repositories/UserRepository.js";
import MetadataService from "../repositories/MetaDataRepository.js";
import bcrypt from "bcryptjs";

class WorkspaceService {
  constructor() {
    this.repository = new WorkspaceRepository();
    this.userRepository = new UserRepository();
    this.metaDataRepository = new MetadataService();
  }

  async workspaceNameCheckService(dto) {
    try {
      const response = await this.repository.workspaceNameCheckRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async registerWorkspaceService(dto) {
    try {
      // Check if platform user exists
      const existingUser = await this.userRepository.getPlatformUserByEmail(dto.email);
      if (existingUser) {
        return {
          success: false,
          message: "User already exists.",
          data: null,
        };
      }

      // Get package details
      const packageDetails = await this.metaDataRepository.getPackagesById(dto.packageId);
      let isActive = true;
      if (packageDetails.packageNumber == 1) {
        isActive = false;
      }
      // Hash the password
      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);
      const hashedPassword = await bcrypt.hash(dto.password, SALT_ROUNDS);
      dto.password = hashedPassword;

      // Get a random profile color
      const randomProfileColor = await this.userRepository.getRandomProfileColor();
      if (!randomProfileColor) {
        return {
          success: false,
          message: "No profile colors available.",
          data: null,
        };
      }
      dto.profileColorId = randomProfileColor._id;

      // Create platform user
      const newPlatformUser = {
        fullName: dto.fullName,
        profilePictureUrl: dto.profilePictureUrl,
        phoneNumber: dto.phoneNumber,
        countryCode: dto.countryCode,
        email: dto.email,
        profileColorId: dto.profileColorId,
        password: dto.password,
        timezone: dto.timeZoneId,
        joiningDate: Date.now(),
        mode: 0,
        userStatus: 1,
        isRootUser: true,
        pushId: dto.pushId,
        deviceId: dto.deviceId,
        isActive: isActive,
        isFirstTimeLogin: true,
      };
      const platformUser = await this.userRepository.savePlatformUserRepository(newPlatformUser);

      // Create workspace
      const newWorkspace = {
        workspaceOwnerPlatformUserId: platformUser.data._id,
        workspaceName: dto.workspaceName,
        workspaceLogoURL: dto.workspaceLogoURL,
        workspaceColorId: dto.workspaceColorId,
        subscriptionStartDate: Date.now(),
        subscriptionDueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
        userCount: packageDetails.defaultUserCount,
        thisMonthBill: packageDetails.monthlyPrice,
        paymentSuccess: false,
        packageId: dto.packageId,
        defaultCompany: true,
        isActive: false,
      };
      const platformWorkspace = await this.repository.savePlatformWorkspaceRepository(newWorkspace);

      // Create workspace user
      const newWorkspaceUser = {
        platformUserId: platformUser.data._id,
        workspaceId: platformWorkspace.data._id,
        email: dto.email,
        profileColorId: dto.profileColorId,
        role: 1, 
        userStatus: 1,
        joinDate: Date.now(),
        isActive: false,
      };
      const workspaceUser = await this.repository.saveWorkspaceUserRepository(newWorkspaceUser);

      if (platformUser && platformWorkspace && workspaceUser) {
        return {
          success: true,
          message: "Workspace registered.",
          data: {platformUser:platformUser,platformWorkspace:platformWorkspace,workspaceUser:workspaceUser}
        };
      }

      return {
        success: false,
        message: "Failed to register workspace.",
        data: null,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }
}

export default WorkspaceService;

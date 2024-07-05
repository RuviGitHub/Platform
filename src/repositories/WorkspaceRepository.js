import PlatformUser from "../models/PlatformUser.js";
import PlatformWorkspace from "../models/PlatformWorkspace.js";
import WorkspaceUser from "../models/WorkspaceUser.js";
import WorkspaceBillingDetail from "../models/WorkspaceBillingDetail.js";

class WorkspaceRepository {
  

  async workspaceNameCheckRepository(dto) {
    try {
      // Check for existing workspace with the same name
      const existingEntity = await PlatformWorkspace.findOne({
        workspaceName: dto.workspaceName,
        _id: dto.workspaceId
      });
      if (existingEntity) {
        return {
          success: false,
          message: "Workspace already exists.",
          data: null,
        };
      } else {
        return {
          success: true,
          message: "Workspace do not exists.",
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

  async registerWorkspaceService(dto) {
    try {
      
    } catch (error) {
      return {
        success: false,
        message: "Register workspace error.",
        data: null
      }
    }
  }

  async savePlatformWorkspaceRepository(dto) {
    try {
      const newWorkspace = new PlatformWorkspace(dto);
      const savedWorkspace = await newWorkspace.save();
      return {
        success: false,
        message: "Platform workspace saved.",
        data: savedWorkspace
      }
    } catch (error) {
      return {
        success: false,
        message: "Platform workspace saving error.",
        data: null
      }
    }
  }

  async saveWorkspaceUserRepository(dto) {
    try {
      const workspaceUser = new WorkspaceUser(dto);
      const savedWorkspaceUser = await workspaceUser.save();
      return {
        success: false,
        message: "Workspace user saved.",
        data: savedWorkspaceUser
      }
    } catch (error) {
      return {
        success: false,
        message: "Workspace user saving error.",
        data: null
      }
    }
  }
}

export default WorkspaceRepository;

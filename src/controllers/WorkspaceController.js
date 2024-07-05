import { successResponse, errorResponse } from "../utils/responseUtil.js";
import WorkspaceService from "../services/WorkspaceService.js";

const workspaceService = new WorkspaceService();

class WorkspaceController {
  async workspaceNameCheckController(req, res, next) {
    try {
      const dto = { workspaceName: req.query.workspaceName,  workspaceId: req.query.workspaceId};

      if (!dto.workspaceName && !dto.workspaceId)
        return errorResponse(
          res,
          "Required fields are missing: workspaceName or workspaceId",
          400
        );

      const response = await workspaceService.workspaceNameCheckService(dto);

      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async registerWorkspaceController(req, res, next) {
    try {
      const dto = req.body;
      const response = await workspaceService.registerWorkspaceService(dto);
      // Check if response is successful
      if (response && response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async startFreeTrailRepository(dto) {
    try {
      // Check for existing workspace with the same name
      const existingEntity = await PlatformWorkspace.findOne({
        _id: dto.workspaceId,
      });
      if (!existingEntity) {
        return {
          success: false,
          message: "Workspace not found.",
          data: null,
        };
      }

      // Update the existing workspace with the new details
      existingEntity.subscriptionStartDate = new Date();
      existingEntity.subscriptionDueDate = new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ); 
      existingEntity.userCount = dto.userCount;
      existingEntity.packageId = dto.packageId;
      existingEntity.timestamp = new Date();

      await existingEntity.save();

      return {
        success: true,
        message: "Free trial started successfully.",
        data: existingEntity,
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

export default WorkspaceController;

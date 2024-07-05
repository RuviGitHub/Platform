import { successResponse, errorResponse } from "../utils/responseUtil.js";
import DEFService from "../services/DEFService.js";

const defService = new DEFService();

class DEFController {
  async createDEFController(req, res, next) {
    try {
      const dto = req.body;

      const response = await defService.createDEFService(dto);
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

  async defNameCheckController(req, res, next) {
    try {
      const dto = {
        defName: req.query.defName.trim(),
        workspaceId: req.query.workspaceId,
      };

      if (!dto.workspaceName && !dto.workspaceId) {
        return errorResponse(
          res,
          "Required fields are missing: workspaceName or workspaceId",
          400
        );
      }

      const response = await defService.defNameCheckService(dto);

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

  async getAllDefsPaginatedController(req, res, next) {
    try {
      const dto = {
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        order: req.query.order,
        search: req.query.search,
        workspaceId: req.query.workspaceId,
      };
      const response = await defService.getAllDefsPaginatedService(dto);
      if (response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async updateDEFController(req, res, next) {
    try {
      const dto = {
        workspaceId: req.body.workspaceId || null,
        defName: req.body.defName || null,
        defDescription: req.body.defDescription || null,
        defFields: req.body.defFields || null,
      }

      if (!dto.workspaceId) {
        return errorResponse(
          res,
          "Required fields are missing: workspaceId",
          400
        );
      }
      const response = await defService.updateDEFService(dto);
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
}

export default DEFController;

import { successResponse, errorResponse } from "../utils/responseUtil.js";
import DazhService from "../services/DazhService.js";

const dazhService = new DazhService();

class DazhController {
  async createDazhController(req, res, next) {
    try {
      const dto = req.body;

      const response = await dazhService.createDazhService(dto);
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

  async dazhNameCheckController(req, res, next) {
    try {
      const dto = {
        dazhName: req.query.dazhName.trim(),
        workspaceId: req.query.workspaceId,
      };

      if (!dto.dazhName && !dto.workspaceId)
        return errorResponse(
          res,
          "Required fields are missing: dazhName or workspaceId",
          400
        );

      const response = await dazhService.dazhNameCheckService(dto);

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

  async getAllDazhsPaginatedController(req, res, next) {
    try {
      const dto = {
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        order: req.query.order,
        search: req.query.search,
        workspaceId: req.query.workspaceId,
      };
      const response = await dazhService.getAllDazhsPaginatedService(dto);
      if (response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async updateDazhController(req, res, next) {
    try {
      const dto = {
        dazhboardName: req.body.dazhboardName || null,
        dazhboardLogoUrl: req.body.dazhboardLogoUrl || null,
        dazhboardAvatar: req.body.dazhboardAvatar || null,
        dazhboardColorId: req.body.dazhboardColorId || null,
        isPrivate: req.body.isPrivate || null,
        password: req.body.password || null,
        widgetCount: req.body.widgetCount || null,
        widget: req.body.widget || null,
      };

      if (!dto.workspaceId) {
        return errorResponse(
          res,
          "Required fields are missing: workspaceId",
          400
        );
      }
      const response = await dazhService.updateDazhService(dto);
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

export default DazhController;

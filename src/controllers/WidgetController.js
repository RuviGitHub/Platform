import { successResponse, errorResponse } from "../utils/responseUtil.js";
import WidgetService from "../services/WidgetService.js";

const widgetService = new WidgetService();

class WidgetController {
  async createWidgetController(req, res, next) {
    try {
      const dto = req.body;

      const response = await widgetService.createWidgetService(dto);
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

  async widgetNameCheckController(req, res, next) {
    try {
      const dto = {
        widgetName: req.query.widgetName.trim(),
        workspaceId: req.query.workspaceId,
      };

      if (!dto.widgetName && !dto.workspaceId)
        return errorResponse(
          res,
          "Required fields are missing: widgetName or workspaceId",
          400
        );

      const response = await widgetService.widgetNameCheckService(dto);

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

  async getAllWidgetsPaginatedController(req, res, next) {
    try {
      const dto = {
        page: req.query.page,
        limit: req.query.limit,
        sort: req.query.sort,
        order: req.query.order,
        search: req.query.search,
        workspaceId: req.query.workspaceId,
      };
      const response = await widgetService.getAllWidgetsPaginatedService(dto);
      if (response.success) {
        return successResponse(res, response.message, response.data);
      } else {
        return errorResponse(res, response.message, 500);
      }
    } catch (error) {
      next(error);
    }
  }

  async updateWidgetController(req, res, next) {
    try {
      const dto = {
        widgetName: req.body.widgetName || null,
        workspaceId: req.body.workspaceId || null,
        defColor: req.body.defColor || null,
        defId: req.body.defId || null,
        xAxis: req.body.xAxis || null,
        yAxis: req.body.yAxis || null,
        goalValue: req.body.goalValue || null,
        goalType: req.body.goalType || null,
        goalColor: req.body.goalColor || null,
        unitId: req.body.unitId || null,
        mapKey: req.body.mapKey ? req.body.mapKey : null,
        approvers: req.body.approvers ? req.body.approvers : null,
        assigners: req.body.assigners ? req.body.assigners : null,
        scheduleType: req.body.scheduleType || null,
        calendarId: req.body.calendarId || null,
        isDateRange: req.body.isDateRange || null,
        isContinuous: req.body.isContinuous || null,
        startDateTime: req.body.startDateTime || null,
        endDateTime: req.body.endDateTime || null,
      };
      

      if (!dto.workspaceId) {
        return errorResponse(
          res,
          "Required fields are missing: workspaceId",
          400
        );
      }
      const response = await widgetService.updateWidgetService(dto);
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

export default WidgetController;

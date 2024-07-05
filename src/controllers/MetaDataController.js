import validator from "validator";
import { successResponse, errorResponse } from "../utils/responseUtil.js";
import MetaDataService from "../services/MetaDataService.js";
// import FileUploadService from "../services/FileUploadService.js";

const metaDataService = new MetaDataService();

class MetaDataController {
  async getMetaDataController(req, res, next) {
    try {
      const response = await metaDataService.getMetaDataService();
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

  async getPackagesController(req, res, next) {
    try {
      const response = await metaDataService.getPackagesService();
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

  async getQuickGuideStatus(req, res, next) {
    try {
      const response = {
        success: true,
        message: "Quick guide data fetched.",
        data: {
          workspace: true,
          users: true,
          calendar: true,
          dashboard: true,
          widget: true,
        },
      };
      return successResponse(res, response.message, response.data);
    } catch (error) {
      next(error);
    }
  }

  async uploadFile(req, res, next) {
    const file = req.file ? req.file : null;
    try {
      if (!file) {
        return res.status(200).json({
          success: false,
          message: "No file provided for upload.",
          data: null,
        });
      }

      const response = await metaDataService.uploadFile(file);
      return res.status(200).json({
        success: response.success,
        message: response.message,
        data: response.data,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default MetaDataController;

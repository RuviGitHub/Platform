import { successResponse, errorResponse } from "../utils/responseUtil.js";
import CalendarService from "../services/CalendarService.js";

const calendarService = new CalendarService();

class CalendarController {
    
   async createCalendarController(req, res, next) {
      try {
         const dto =
            req.body;
         
         const response = await calendarService.createCalendarService(dto);
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

   async getAllCalendarsPaginatedController(req, res, next) {
      const { page, limit, sort, search, workspaceId } = req.query;
      try {
         // Convert 'page' and 'limit' to numbers
         const parsedPage = parseInt(page, 10) || 1;
         const parsedLimit = parseInt(limit, 10) || 10;
         const response = await calendarService.allCalendarsService({
            page: parsedPage,
            limit: parsedLimit,
            sort,
            search,
            workspaceId,
         });
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

   async viewCalendarsController(req, res, next) {
      const { calendarId } = req.query;
      try {
         // Check if email is provided
         if (!calendarId) {
            const errorMessage = "Calendar ID required!";
            return errorResponse(res, errorMessage, 400);
         }
         const response = await calendarService.viewCalendarsService(
            calendarId
         );
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

   async updateCalendarsController(req, res, next) {
      const {
         workspaceId,
         calendarId,
         calendarName,
         description,
         holidays,
         workingDays,
         sunday,
         monday,
         tuesday,
         wednesday,
         thursday,
         friday,
         saturday,
      } = req.body;
      try {
         // Check if email is provided
         if (!calendarId) {
            const errorMessage = "Calendar ID required!";
            return errorResponse(res, errorMessage, 400);
         }
         const response = await calendarService.updateCalendarsService({
            workspaceId,
            calendarId,
            calendarName,
            description,
            holidays,
            workingDays,
            sunday,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
         });
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

   async statusChangeController(req, res, next) {
      const { calendarId, calendarStatus } = req.body;
      try {
         // Check if email is provided
         if (!calendarId) {
            const errorMessage = "Calendar ID required!";
            return errorResponse(res, errorMessage, 400);
         }
         const response = await calendarService.statusChangeService(
            {
               _id: calendarId,
               isActive: true,
            },
            {
               calendarStatus: calendarStatus,
            }
         );
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

export default CalendarController;
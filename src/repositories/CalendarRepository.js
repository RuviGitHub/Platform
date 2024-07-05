import WorkspaceCalendar from "../models/WorkspaceCalendar.js";

class CalendarRepository {
   async createCalendarRepo(dto) {
      const { workspaceId, calendarName } = dto;
      dto.createdBy = dto.workspaceUserId;
      try {
         const existCalendar = await WorkspaceCalendar.findOne({
            calendarName: { $regex: new RegExp(`^${calendarName}$`, "i") },
            workspaceId: workspaceId,
            isActive: true,
         });
         if (existCalendar) {
            return {
               success: false,
               message: "This calendar name already exist !",
               data: null,
            };
         }

         const newCalendar = new WorkspaceCalendar(dto);
         const createdCalendar = await newCalendar.save();

         return {
            success: true,
            message: "Calendar Created Successfully.",
            data: createdCalendar,
         };
      } catch (error) {
         console.error("Create calendar error:", error);
         return null;
      }
   }

   async allCalendarsRepo(dto) {
      const { page, limit, sort, search, workspaceId } = dto;
      try {
         const query = {
            workspaceId: workspaceId,
            isActive: true,
         };
         if (search) {
            query.calendarName = { $regex: search, $options: "i" };
         }

         let sortCriteria = {};
         if (sort == 1) {
            sortCriteria = { updatedAt: -1 };
         } else if (sort == 2) {
            sortCriteria = { updatedAt: 1 };
         } else {
            sortCriteria = { updatedAt: -1 };
         }

         // Calculate skip value for pagination
         const skip = (page - 1) * limit;
         const allCalendars = await WorkspaceCalendar.find(query)
            .sort(sortCriteria)
            .skip(skip)
            .limit(limit)
            .lean();
         if (!allCalendars) {
            return {
               success: false,
               message: "No calendar to fetch!",
               data: null,
            };
         }

         const processedCalendar = await Promise.all(
            allCalendars.map((calendar) => {
               return {
                  calendarId: calendar._id,
                  calendarName: calendar.calendarName,
                  description: calendar.description || null,
                  calendarStatus: calendar.calendarStatus,
                  updatedAt: calendar.updatedAt,
               };
            })
         );
         // Count total number of users matching the query
         const totalCount = await WorkspaceCalendar.countDocuments(query);
         const totalPages = Math.ceil(totalCount / limit);
         return {
            success: true,
            message: "Calendars fetched successfully!",
            data: {
               page,
               totalPages,
               totalCount,
               calendars: processedCalendar,
            },
         };
      } catch (error) {
         console.error("Get all calendars error :", error);
         return null;
      }
   }

   async viewCalendarsRepo(calendarId) {
      try {
         const calendar = await WorkspaceCalendar.findOne({
            _id: calendarId,
         }).lean();
         if (!calendar) {
            return {
               success: false,
               message: "Can not find calendar !",
               data: null,
            };
         }

         const processedCalendar = {
            calendarId: calendar._id,
            calendarName: calendar.calendarName,
            description: calendar.description || null,
            calendarStatus: calendar.calendarStatus,
            workingDays: calendar.workingDays || null,
            holidays: calendar.holidays || null,
            sunday: calendar.sunday,
            monday: calendar.monday,
            tuesday: calendar.tuesday,
            wednesday: calendar.wednesday,
            thursday: calendar.thursday,
            friday: calendar.friday,
            saturday: calendar.saturday,
            updatedAt: calendar.updatedAt,
         };

         return {
            success: true,
            message: "Calendar fetched successfully!",
            data: processedCalendar,
         };
      } catch (error) {
         console.error("View calendar error :", error);
         return null;
      }
   }

   async updateCalendarsRepo(dto) {
      try {
         const existCalendar = await WorkspaceCalendar.findOne({
            _id: { $ne: dto.calendarId },
            calendarName: {
               $regex: new RegExp(`^${dto.calendarName}$`, "i"),
            },
            workspaceId: dto.workspaceId,
            isActive: true,
         });
         if (existCalendar) {
            return {
               success: false,
               message: "This calendar name already exist !",
               data: null,
            };
         }
         const updatedCalendar = await WorkspaceCalendar.findOneAndUpdate(
            { _id: dto.calendarId },
            dto
         );
         if (!updatedCalendar) {
            return {
               success: false,
               message: "Calendar not found or could not be updated!",
               data: null,
            };
         }

         return {
            success: true,
            message: "Calendar updated successfully!",
            data: null,
         };
      } catch (error) {
         console.error("Update calendar error :", error);
         return null;
      }
   }

   
   async statusChangeRepo(filters, inputs) {
      try {
         const updatedCalendar = await WorkspaceCalendar.findOneAndUpdate(
            filters,
            inputs
         );
         if (!updatedCalendar) {
            return {
               success: false,
               message: "Calendar not found or could not be updated!",
               data: null,
            };
         }

         return {
            success: true,
            message: "Calendar updated successfully!",
            data: null,
         };
      } catch (error) {
         console.log(error)
         return {
            success: false,
            message: error.message,
            data: null,
         };
      }
   }
}

export default CalendarRepository;
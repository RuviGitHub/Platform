import CalendarRepository from "../repositories/CalendarRepository.js";

class CalendarService {
   constructor() {
      this.repository = new CalendarRepository();
   }

   async createCalendarService(dto) {
      try {
         const response = await this.repository.createCalendarRepo(dto);
         return response;
      } catch (error) {
         return {
            success: false,
            message: error.message,
            data: null,
         };
      }
   }

   async allCalendarsService(dto) {
      try {
         const response = await this.repository.allCalendarsRepo(dto);
         return response;
      } catch (error) {
         return {
            success: false,
            message: error.message,
            data: null,
         };
      }
   }

   async viewCalendarsService(dto) {
      try {
         const response = await this.repository.viewCalendarsRepo(dto);
         return response;
      } catch (error) {
         return {
            success: false,
            message: error.message,
            data: null,
         };
      }
   }

   async updateCalendarsService(dto) {
      try {
         const response = await this.repository.updateCalendarsRepo(dto);
         return response;
      } catch (error) {
         return {
            success: false,
            message: error.message,
            data: null,
         };
      }
   }

   async statusChangeService(filters, inputs) {
      try {
         const response = await this.repository.statusChangeRepo(filters, inputs);
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

export default CalendarService;
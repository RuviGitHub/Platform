import WidgetRepository from "../repositories/WidgetRepository.js";

class WidgetService {
  constructor() {
    this.repository = new WidgetRepository();
  }

  async createWidgetService(dto) {
    try {
      const response = await this.repository.createWidgetRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async widgetNameCheckService(dto) {
    try {
      const response = await this.repository.widgetNameCheckRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllWidgetsPaginatedService(dto) {
    try {
      const response = await this.repository.getAllWidgetsPaginatedRepository(
        dto
      );
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async updateWidgetService(dto) {
    try {
      const response = await this.repository.updateWidgetRepository(dto);
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

export default WidgetService;

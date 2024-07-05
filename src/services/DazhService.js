import DazhRepository from "../repositories/DazhRepository.js";

class DazhService {
  constructor() {
    this.repository = new DazhRepository();
  }

  async createDazhService(dto) {
    try {
      const response = await this.repository.createDazhRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async dazhNameCheckService(dto) {
    try {
      const response = await this.repository.dazhNameCheckRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllDazhsPaginatedService(dto) {
    try {
      const response = await this.repository.getAllDazhboardPaginatedRepository(
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

  async updateDazhService(dto) {
    try {
      const response = await this.repository.updateDazhRepository(dto);
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

export default DazhService;

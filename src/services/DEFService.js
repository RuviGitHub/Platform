import DEFRepository from "../repositories/DEFRepository.js";

class DEFService {
  constructor() {
    this.repository = new DEFRepository();
  }

  async createDEFService(dto) {
    try {
      const response = await this.repository.createDEFRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async defNameCheckService(dto) {
    try {
      const response = await this.repository.defNameCheckRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllDefsPaginatedService(dto) {
    try {
      const response = await this.repository.getAllDefsPaginatedRepository(dto);
      return response;
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async updateDEFService(dto) {
    try {
      const response = await this.repository.updateDEFRepository(dto);
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

export default DEFService;

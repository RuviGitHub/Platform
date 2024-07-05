import WorkspaceDEF from "../models/WorkspaceDEF.js";

class DEFRepository {
  async createDEFRepository(dto) {
    try {
      const existingEntity = await WorkspaceDEF.findOne({
        defName: dto.defName,
        workspaceId: dto.workspaceId,
        isActive: true,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "DEF already exists.",
          data: null,
        };
      }

      const newEntity = new WorkspaceDEF(dto);
      const createdEntity = await newEntity.save();

      return {
        success: true,
        message: "DEF created.",
        data: createdEntity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: true,
        message: "DEF creating error.",
        data: null,
      };
    }
  }

  async defNameCheckRepository(dto) {
    try {
      // Check for existing workspace with the same name
      const existingEntity = await WorkspaceDEF.findOne({
        defName: dto.defName,
        workspaceId: dto.workspaceId,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "DEF already exists.",
          data: null,
        };
      } else {
        return {
          success: true,
          message: "DEF do not exists.",
          data: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getAllDefsPaginatedRepository(dto) {
    try {
      const skip = (dto.page - 1) * dto.limit;

      let sortField = dto.sort || "createdAt";
      const sortOrder = dto.order || "asc";

      const allowedSortFields = ["createdAt"];
      if (!allowedSortFields.includes(sortField)) {
        return {
          success: false,
          message: "Invalid sort.",
          data: null,
        };
      }

      const query = {
        isActive: true,
      };

      if (dto.search) {
        query.fullName = { $regex: dto.search, $options: "i" };
      }

      if (dto.workspaceId) {
        query.workspaceId = dto.workspaceId;
      }

      const allDEFs = WorkspaceDEF.find(query);

      // Apply sorting, skipping, and limiting
      allDEFs
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(dto.limit);

      const defs = await allDEFs.exec();
      const totalDEFs = await WorkspaceDEF.countDocuments(query);

      return {
        success: true,
        message: "Defs fetched.",
        data: {
          defs,
          totalPages: Math.ceil(totalDEFs / dto.limit),
          currentPage: dto.page,
        },
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async updateDEFRepository(dto) {
    try {
      const existingEntity = await WorkspaceDEF.findOne({
        defName: dto.defName,
        workspaceId: dto.workspaceId,
        isActive: true,
      });

      if (!existingEntity) {
        return {
          success: false,
          message: "DEF not found.",
          data: null,
        };
      }

      existingEntity.defName =
        dto.defName != null ? dto.defName : existingEntity.defName;
      existingEntity.defDescription =
        dto.defDescription != null
          ? dto.defDescription
          : existingEntity.defDescription;
      existingEntity.defFields =
        dto.defFields != null ? dto.defFields : existingEntity.defFields;

      await existingEntity.save();

      return {
        success: true,
        message: "DEF updated.",
        data: existingEntity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error updating DEF.",
        data: null,
      };
    }
  }
}

export default DEFRepository;

import WorkspaceDazhboard from "../models/WorkspaceDazhboard.js";

class DazhRepository {
  async createDazhRepository(dto) {
    try {
      const existingEntity = await WorkspaceDazhboard.findOne({
        dazhboardName: dto.dazhboardName,
        workspaceId: dto.workspaceId,
        isActive: true,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "Dazhboard already exists.",
          data: null,
        };
      }
  
      const newEntity = new WorkspaceDazhboard(dto); // Corrected line
      const createdEntity = await newEntity.save();
  
      return {
        success: true,
        message: "Dazhboard created.",
        data: createdEntity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: true,
        message: "Dazhboard creating error.",
        data: null,
      };
    }
  }
  

  async dazhNameCheckRepository(dto) {
    try {
      // Check for existing workspace with the same name
      const existingEntity = await WorkspaceDazhboard.findOne({
        dazhboardName: dto.dazhboardName,
        workspaceId: dto.workspaceId,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "Dazhboard already exists.",
          data: null,
        };
      } else {
        return {
          success: true,
          message: "Dazhboard do not exists.",
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

  async getAllDazhboardPaginatedRepository(dto) {
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
  
      const query = {};
  
      // if (dto.search) {
      //   query.fullName = { $regex: dto.search, $options: "i" };
      // }
  
      // if (dto.workspaceId) {
      //   query.workspaceId = dto.workspaceId;
      // }
  
      const allDazhs = WorkspaceDazhboard.find(query);
  
      // Apply sorting, skipping, and limiting
      allDazhs
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(dto.limit);
  
      const dazhs = await allDazhs.exec();
      const totalDazhs = await WorkspaceDazhboard.countDocuments(query);
  
      console.log("Fetched Dazhs:", dazhs); // Check what is fetched
  
      return {
        success: true,
        message: "Dazhboard fetched.",
        data: {
          defs: dazhs,
          totalPages: Math.ceil(totalDazhs / dto.limit),
          currentPage: dto.page,
        },
      };
    } catch (error) {
      console.error("Error fetching Dazhboards:", error);
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }
  

  async updateDazhRepository(dto) {
    try {
        const existingEntity = await WorkspaceDazhboard.findOne({
            dazhboardName: dto.dazhboardName,
            workspaceId: dto.workspaceId,
           // isActive: true
        });

        if (!existingEntity) {
            return {
                success: false,
                message: "Dazhboard not found.",
                data: null,
            };
        }

        // Update existingEntity fields with dto values
        existingEntity.dazhboardLogoUrl = dto.dazhboardLogoUrl || existingEntity.dazhboardLogoUrl;
        existingEntity.dazhboardAvatar = dto.dazhboardAvatar || existingEntity.dazhboardAvatar;
        existingEntity.dazhboardColorId = dto.dazhboardColorId || existingEntity.dazhboardColorId;
        existingEntity.isPrivate = dto.isPrivate || existingEntity.isPrivate;
        existingEntity.password = dto.password || existingEntity.password;
        existingEntity.widgetCount = dto.widgetCount || existingEntity.widgetCount;
        existingEntity.widget = dto.widget || existingEntity.widget;

        await existingEntity.save();

        return {
            success: true,
            message: "Dazhboard updated.",
            data: existingEntity,
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Error updating Dazhboard.",
            data: null,
        };
    }
}

}

export default DazhRepository;

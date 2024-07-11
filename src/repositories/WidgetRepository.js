import WorkspaceWidget from "../models/WorkspaceWidget.js";

class WidgetRepository {
  async createWidgetRepository(dto) {
    try {
      const existingEntity = await WorkspaceWidget.findOne({
        widgetName: dto.widgetName,
        workspaceId: dto.workspaceId,
        isActive: true,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "Widget already exists.",
          data: null,
        };
      }

      const newEntity = new WorkspaceWidget(dto);
      const createdEntity = await newEntity.save();

      return {
        success: true,
        message: "Widget created.",
        data: createdEntity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: true,
        message: "Widget creating error.",
        data: null,
      };
    }
  }

  async widgetNameCheckRepository(dto) {
    try {
      // Check for existing workspace with the same name
      const existingEntity = await WorkspaceWidget.findOne({
        widgetName: dto.widgetName,
        workspaceId: dto.workspaceId,
      });
      if (existingEntity) {
        return {
          success: false,
          message: "Widget already exists.",
          data: null,
        };
      } else {
        return {
          success: true,
          message: "Widget do not exists.",
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

  async getAllWidgetsPaginatedRepository(dto) {
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
     
      };

      /* if (dto.search) {
        query.fullName = { $regex: dto.search, $options: "i" };
      }

      if (dto.workspaceId) {
        query.workspaceId = dto.workspaceId;
      } */

      const allWidgets = WorkspaceWidget.find(query);

      // Apply sorting, skipping, and limiting
      allWidgets
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(dto.limit);

      const widgets = await allWidgets.exec();
      const totalWidgets = await WorkspaceWidget.countDocuments(query);

      return {
        success: true,
        message: "Widgets fetched.",
        data: {
          defs :widgets,
          totalPages: Math.ceil(totalWidgets / dto.limit),
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

  async updateWidgetRepository(dto) {
    try {
      const existingEntity = await WorkspaceWidget.findOne({
        widgetName: dto.widgetName,
        workspaceId: dto.workspaceId,
     // isActive: true,
      });

      if (!existingEntity) {
        return {
          success: false,
          message: "Widget not found.",
          data: null,
        };
      }

      // Update properties if they are not null
      existingEntity.widgetName =
        dto.widgetName != null ? dto.widgetName : existingEntity.widgetName;
      existingEntity.workspaceId =
        dto.workspaceId != null ? dto.workspaceId : existingEntity.workspaceId;
      existingEntity.defColor =
        dto.defColor != null ? dto.defColor : existingEntity.defColor;
      existingEntity.defId =
        dto.defId != null ? dto.defId : existingEntity.defId;
      existingEntity.xAxis =
        dto.xAxis != null ? dto.xAxis : existingEntity.xAxis;
      existingEntity.yAxis =
        dto.yAxis != null ? dto.yAxis : existingEntity.yAxis;
      existingEntity.goalValue =
        dto.goalValue != null ? dto.goalValue : existingEntity.goalValue;
      existingEntity.goalType =
        dto.goalType != null ? dto.goalType : existingEntity.goalType;
      existingEntity.goalColor =
        dto.goalColor != null ? dto.goalColor : existingEntity.goalColor;
      existingEntity.unitId =
        dto.unitId != null ? dto.unitId : existingEntity.unitId;
      existingEntity.mapKey =
        dto.mapKey != null ? dto.mapKey : existingEntity.mapKey;
      existingEntity.approvers =
        dto.approvers != null ? dto.approvers : existingEntity.approvers;
      existingEntity.assigners =
        dto.assigners != null ? dto.assigners : existingEntity.assigners;
      existingEntity.scheduleType =
        dto.scheduleType != null
          ? dto.scheduleType
          : existingEntity.scheduleType;
      existingEntity.calendarId =
        dto.calendarId != null ? dto.calendarId : existingEntity.calendarId;
      existingEntity.isDateRange =
        dto.isDateRange != null ? dto.isDateRange : existingEntity.isDateRange;
      existingEntity.isContinuous =
        dto.isContinuous != null
          ? dto.isContinuous
          : existingEntity.isContinuous;
      existingEntity.startDateTime =
        dto.startDateTime != null
          ? dto.startDateTime
          : existingEntity.startDateTime;
      existingEntity.endDateTime =
        dto.endDateTime != null ? dto.endDateTime : existingEntity.endDateTime;

      await existingEntity.save();

      return {
        success: true,
        message: "Widget updated.",
        data: existingEntity,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error updating Widget.",
        data: null,
      };
    }
  }
}

export default WidgetRepository;

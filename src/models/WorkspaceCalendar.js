import { Schema, model } from "mongoose";

const holidaySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const workingDaysSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const workspaceCalendarSchema = new Schema(
  {
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformWorkspace",
      required: true,
    },
    calendarName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    workingDays: {
      type: [workingDaysSchema],
      default: [],
    },
    holidays: {
      type: [holidaySchema],
      default: [],
    },
    sunday: {
      type: Boolean,
      default: false,
    },
    monday: {
      type: Boolean,
      default: false,
    },
    tuesday: {
      type: Boolean,
      default: false,
    },
    wednesday: {
      type: Boolean,
      default: false,
    },
    thursday: {
      type: Boolean,
      default: false,
    },
    friday: {
      type: Boolean,
      default: false,
    },
    saturday: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "WorkspaceUser",
      required: true,
    },
    calendarStatus: {
      type: Number,
      enum: [0, 1], // 0: inactive, 1: active
      default: 1,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "WorkspaceUser",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const WorkspaceCalendar = model("WorkspaceCalendar", workspaceCalendarSchema);

export default WorkspaceCalendar;

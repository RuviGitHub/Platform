import mongoose from 'mongoose';

const { Schema } = mongoose;


const workspaceWidgetSchema = new Schema({
  widgetName: {
    type: String,
    required: true,
    trim: true,
  },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: "PlatformWorkspace",
    required: true,
  },
  defColor: {
    type: Schema.Types.ObjectId,
    ref: "WidgetColor",
  },
  defId: {
    type: String,
    required: true,
    ref: "WorkspaceDEF",
    trim: true,
  },
  xAxis: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  yAxis: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  goalValue: {
    type: Number,
    required: true,
  },
  goalType: {
    type: Number,
    enum: [0, 1, 2, 3], // 0: more than  1: less than 2: range 3: line
  },
  goalColor: {
    type: String,
    trim: true,
  },
  unitId: {
    type: String,
    ref: "PlatformUnit",
    trim: true,
  },
  mapKey: [
    {
      _id: {
        type: Schema.Types.ObjectId,
      },
      key: {
        type: String
      }
    }
  ],
  approvers: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "WorkspaceUser"
      },
    },
  ],
  assigners: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "WorkspaceUser"
      },
    },
  ],
  scheduleType: {
    type: Number,
    enum: [0, 1], // 0: auto 1:manual
  },
  calendarId: {
    type: Schema.Types.ObjectId,
    ref: "WorkspaceCalendar"
  },
  isDateRange: {
    type: Boolean,
  },
  isContinuous: {
    type: Boolean,
  },
  startDateTime: {
    type: Date,
  },
  endDateTime: {
    type: Date,
  },
});



const WorkspaceWidget = mongoose.model('WorkspaceWidget', workspaceWidgetSchema);

export default WorkspaceWidget;
import mongoose from "mongoose";

const { Schema } = mongoose;

const workspaceDazhboardSchema = new Schema({
  dazhboardName: {
    type: String,
    required: true,
  },
  dazhboardLogoUrl: {
    type: String,
    required: false,
  },
  dazhboardAvatar: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5, 6, 7],
    required: true,
  },
  dazhboardColorId: {
    type: String,
    required: true,
  },
  isPrivate: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
  },
  widgetCount: {
    type: Number,
    required: true,
  },
  widget: {
    type: [
      {
        name: { type: String, required: true },
        type: { type: String, required: true },
        settings: { type: Schema.Types.Mixed, required: false },
      },
    ],
  },
});

const WorkspaceDazhboard = mongoose.model("WorkspaceDazhboard",workspaceDazhboardSchema);

export default WorkspaceDazhboard;

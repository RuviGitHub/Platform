import mongoose from "mongoose";

const { Schema } = mongoose;

const workspaceUserSchema = new Schema(
  {
    platformUserId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformUser",
      required: true,
      index: true,
    },
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformWorkspace",
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    profileColorId: {
      type: Schema.Types.ObjectId,
      ref: "ProfileColor",
      required: true,
    },
    role: {
      type: Number,
      enum: [0, 1, 2], // 0: user 1: Company Owner 2:admin
      required: true,
    },
    userStatus: {
      type: Number,
      enum: [0, 1, 2], // 0: inactive , 1: active, 2: pending
      required: true,
    },
    lastEmailSentDate: {
      type: Date,
    },
    pendingEmailStatus: {
      type: Number,
      enum: [0, 1], // 0: no pending email, 1: has pending email
      default: 0,
    },
    invitationToken: {
      type: String,
      trim: true,
    },
    joinDate: {
      type: Date,
    },
    resignDate: {
      type: Date,
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

const WorkspaceUser = mongoose.model("WorkspaceUser", workspaceUserSchema);

export default WorkspaceUser;

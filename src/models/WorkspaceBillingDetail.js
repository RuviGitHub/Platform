import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const workspaceBillingDetailSchema = new Schema(
  {
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformWorkspace",
      required: true,
    },
    countryId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformCountry",
      required: true,
    },
    addressLine01: {
      type: String,
      required: true,
      trim: true,
    },
    addressLine02: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    sessionId : {
      type: String,
    },
    isActive:  {
      type :Boolean,
      default: true
    },

  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const WorkspaceBillingDetail = model("WorkspaceBillingDetail", workspaceBillingDetailSchema);

export default WorkspaceBillingDetail;

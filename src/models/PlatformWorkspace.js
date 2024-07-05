import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const platformWorkspaceSchema = new Schema(
  {
    workspaceOwnerPlatformUserId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformUser",
      required: true,
    },
    workspaceName: {
      type: String,
      required: true,
      trim: true,
    },
    workspaceLogoURL: {
      type: String,
    },
    workspaceColorId: {
      type: Schema.Types.ObjectId,
      ref: 'WorkspaceColor',
      required: true, 
    },
    subscriptionStartDate: {
      type: Date
    },
    subscriptionDueDate: {
      type: Date
    },
    userCount: {
      type: Number
    },
    nextMonthBill: {
      type: Number
    },
    thisMonthBill: {
      type: Number
    },
    paymentSuccess: {
      type: Boolean,
      default: false,
    },
    packageId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformPackage"
    },
    defaultCompany: {
      type: Boolean,
      default: false,
    },
    hasUsers : {
      type: Boolean,
      default: false,
    },
    hasCalendars: {
      type: Boolean,
      default: false,
    },
    hasDazhboards: {
      type: Boolean,
      default: false,
    },
    hasWidgets: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const PlatformWorkspace = model("PlatformWorkspace", platformWorkspaceSchema);

export default PlatformWorkspace;

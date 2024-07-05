import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const platformPackageSchema = new Schema(
  {
    planName: {
      type: String,
      required: true,
      trim: true, 
    },
    packageNumber: {
      type: Number, // 1: PREMIUM, 2: ENTERPRISE, 3: FREE TRIAL
      enum:[1, 2, 3],
      required: true,
      unique: true,
    },
    monthlyPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true, 
    },
    features: {
      type: [String],
      default: [], 
    },
    defaultUserCount: {
      type: Number,
      default: 0, 
    },
    perAdditionalUser: {
      type: Number,
      default: 0,
    },
    storage: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0, 
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  }
);

const PlatformPackage = model('PlatformPackage', platformPackageSchema);

export default PlatformPackage;

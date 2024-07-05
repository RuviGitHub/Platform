import mongoose from "mongoose";

const { Schema } = mongoose;

const platformUserSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    profilePictureUrl: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      //94714146019
      type: String,
      trim: true,
    },
    countryCode: {
      //94
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      index: true,
    },
    profileColorId: {
      type: Schema.Types.ObjectId,
      ref: 'ProfileColor',
    },
    password: {
      type: String,
    },
    countryId: {
      type: String,
      ref: 'PlatformCountry',
    },
    timezoneId: {
      type: Schema.Types.ObjectId,
      ref: "PlatformTimeZone",
    },
    joiningDate: {
      type: Date,
      default: Date.now(),
    },
    mode: {
      type: Number,
      enum: [0, 1], // 0: light, 1: dark
      default: 0,
    },
    userStatus: {
      type: Number,
      enum: [0, 1], // 0: pending 1:active
      default: 0,
    },
    isRootUser: {
      type: Boolean,
      default: false,
    },
    pushId: {
      type: String,
      trim: true,
      default: null,
    },
    deviceId: {
      type: String,
      trim: true,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFirstTimeLogin: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

const PlatformUser = mongoose.model("PlatformUser", platformUserSchema);

export default PlatformUser;

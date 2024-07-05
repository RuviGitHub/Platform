import mongoose from "mongoose";

const platformTimeZoneSchema = new mongoose.Schema(
   {
      country: {
         type: String,
      },
      timeZone: {
         type: String,
         required: true,
         unique: true,
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

const PlatformTimeZone = mongoose.model("PlatformTimeZone",platformTimeZoneSchema);

export default PlatformTimeZone;
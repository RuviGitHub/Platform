import { Schema, model } from "mongoose";

const platformCountrySchema = new Schema({
   country: {
      type: String,
      required: true,
   },
   code: {
      type: String,
      required: true,
   },
   isActive: {
      type: Boolean,
      default: true,
   },
});

const PlatformCountry = model("PlatformCountry", platformCountrySchema);

export default PlatformCountry;

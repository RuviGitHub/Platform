import { Schema, model } from 'mongoose';

const platformUnitSchema = new Schema({
  unit: {
    type: String,
    required: true,
    unique: true
  }
});

const PlatformUnit = model('PlatformUnit', platformUnitSchema);

export default PlatformUnit;

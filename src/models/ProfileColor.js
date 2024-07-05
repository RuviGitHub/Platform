import { Schema, model } from 'mongoose';

const profileColorSchema = new Schema({
  profileColor: {
    type: String,
    required: true,
    trim: true, 
  },
  colorId: {
    type: String,
    required: true,
    unique: true, 
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true, 
});

const ProfileColor = model('ProfileColor', profileColorSchema);

export default ProfileColor;

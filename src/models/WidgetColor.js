import { Schema, model } from 'mongoose';

const widgetColorSchema = new Schema({
  widgetColor: {
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

const WidgetColor = model('WidgetColor', widgetColorSchema);

export default WidgetColor;
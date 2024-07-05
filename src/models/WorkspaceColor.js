import { Schema, model } from 'mongoose';

const workspaceColorSchema = new Schema({
  workspaceColor: {
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

const WorkspaceColor = model('WorkspaeColor', workspaceColorSchema);

export default WorkspaceColor;
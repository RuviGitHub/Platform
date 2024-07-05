import mongoose from 'mongoose';

const { Schema } = mongoose;

const FieldSchema = new Schema({
  fieldName: {
    type: String,
    required: true,
  },
  fieldType: {
    type: String,
    required: true,
  },
  placeholder:  {
    type: String,
  },
  helperText: {
    type: String
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isActive:  {
    type: Boolean,
    default: true,
  }
});

const WorkspaceDEFSchema = new Schema({
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: 'PlatformWorkspace', // Reference to another model if needed
    required: true,
  },
  defName: {
    type: String,
    required: true,
  },
  defDescription: {
    type: String,
    required: true,
  },
  defFields: {
    type: [FieldSchema], // Array of objects defined by FieldSchema
    default: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const WorkspaceDEF = mongoose.model('WorkspaceDEF', WorkspaceDEFSchema);

export default WorkspaceDEF;

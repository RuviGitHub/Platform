import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const emailRecordSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true
    },
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: 'PlatformWorkspace',
      default: null
    },
    otp: {
      type: Number
    },
    invitationToken: {
      type: String
    }
  },
  { timestamps: true }
);

const EmailRecord = model('EmailRecord', emailRecordSchema);

export default EmailRecord;
 
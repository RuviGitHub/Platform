import mongoose from 'mongoose';

const EmailSenderLogSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
  },
  errorMessage: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const EmailSenderLog = mongoose.model('EmailSenderLog', EmailSenderLogSchema);

export default EmailSenderLog;

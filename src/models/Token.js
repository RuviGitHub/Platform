import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PlatformUser',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '45m', // This will automatically delete the token after 45 minutes
  },
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;

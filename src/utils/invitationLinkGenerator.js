import jwt from 'jsonwebtoken';
import WorkspaceUser from '../models/WorkspaceUser.js';

const generateInvitationToken = async (email) => {
  try {
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });


    // // Save the token in the workspaceUser table
    // await WorkspaceUser.findOneAndUpdate(email, { invitationToken: token });

    return token;
  } catch (error) {
    console.error('Error generating invitation token:', error);
    throw new Error('Could not generate invitation token');
  }
};

export default generateInvitationToken;

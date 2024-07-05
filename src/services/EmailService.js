import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { verifyEmail, inviteNormalUser, inviteAdminUser } from '../utils/emailTemplates.js';
import { generateOtp } from '../utils/otpGenerator.js'; 
import generateInvitationToken from '../utils/invitationLinkGenerator.js';
import EmailSenderLog from '../models/EmailSenderLog.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, 
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully: ${to}`, info.response);
    await EmailSenderLog.create({
      to,
      subject,
      success: true,
    });

  } catch (error) {
    console.error(`Error sending email: ${to}`, error);
    await EmailSenderLog.create({
      to,
      subject,
      success: false,
      errorMessage: error.message,
    });
  }
};

const EmailService = {
  async sendVerifyEmail(to) {
    try {
      const otp = generateOtp(); 
      const { subject, html } = verifyEmail(otp);
      await sendEmail(to, subject, html);
      return {
        success: true,
        message: "Verification email sent.",
        otp: otp
      };
      
    } catch (error) {
      return {
        success: false,
        message: error.message,
        otp: null
      };
    }
  },

  async inviteNormalUser(to) {
    try {
      const otp = generateOtp(); 
      const { subject, html } = inviteNormalUser(otp);
      await sendEmail(to, subject, html);
      return {
        success: true,
        message: "Verification email sent.",
        otp: otp
      };
      
    } catch (error) {
      return {
        success: false,
        message: error.message,
        otp: null
      };
    }
  },

  async inviteAdminUser(to) {
    try {
      const invitationLink = await generateInvitationToken(to); 
      const { subject, html } = inviteAdminUser(invitationLink);
      await sendEmail(to, subject, html);
      return {
        success: true,
        message: "Verification email sent.",
        invitationLink: invitationLink
      };
      
    } catch (error) {
      return {
        success: false,
        message: error.message,
        invitationLink: null
      };
    }
  }

};

export default EmailService;

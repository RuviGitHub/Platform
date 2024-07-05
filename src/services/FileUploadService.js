// import AWS from 'aws-sdk';
// import multer from 'multer';
// import path from 'path';
// import dotenv from 'dotenv';
// import { v4 as uuidv4 } from 'uuid';

// dotenv.config();

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_DEFAULT_REGION
// });

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
//   fileFilter: (req, file, cb) => {
//     const fileTypes = /jpeg|jpg|png/;
//     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = fileTypes.test(file.mimetype);

//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//     }
//   }
// }).single('file');

// class FileUploadService {
//   static validateFile(req, res, next) {
//     upload(req, res, function(err) {
//       if (err) {
//         return res.status(400).json({ success: false, message: err.message });
//       }
//       next();
//     });
//   }

//   static async uploadFileToS3(file, fileType) {
//     const fileExtension = path.extname(file.originalname).toLowerCase();
//     const fileName = `${fileType}/${uuidv4()}${fileExtension}`;
//     const s3Params = {
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: fileName,
//       Body: file.buffer,
//       ACL: 'private',
//       ContentType: file.mimetype
//     };

//     try {
//       const data = await s3.upload(s3Params).promise();
//       return { success: true, message: 'File uploaded successfully', data: data.Location };
//     } catch (error) {
//       throw new Error(`File upload failed: ${error.message}`);
//     }
//   }

//   static async getPresignedUrl(key, expires = 60) {
//     const params = {
//       Bucket: process.env.S3_BUCKET_NAME,
//       Key: key,
//       Expires: expires
//     };

//     try {
//       const url = s3.getSignedUrl('getObject', params);
//       return { success: true, message: 'Presigned URL generated successfully', data: url };
//     } catch (error) {
//       throw new Error(`Error generating presigned URL: ${error.message}`);
//     }
//   }
// }

// export default FileUploadService;

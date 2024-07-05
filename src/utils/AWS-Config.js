import {
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
 } from "@aws-sdk/client-s3";
 import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
 
 async function generateSignedUrl(key) {
    const s3Client = new S3Client({
       region: process.env.AWS_DEFAULT_REGION,
       credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
       },
    });
    try {
       const getObjectParams = {
          Bucket: process.env.AWS_BUCKET,
          Key: key,
          Expires: 60,
       };
 
       // Generate signed URL for getObject command
       const signedUrl = await getSignedUrl(
          s3Client,
          new GetObjectCommand(getObjectParams)
       );
 
       return signedUrl;
    } catch (error) {
       console.error("Error generating signed URL:", error);
       return null;
    }
 }
 
 export default { generateSignedUrl };
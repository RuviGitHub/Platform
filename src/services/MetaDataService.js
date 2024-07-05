import MetaDataRepository from "../repositories/MetaDataRepository.js";
import awsConfig from "../utils/AWS-Config.js"
import { GetObjectCommand, PutObjectCommand, S3Client, } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

class MetaDataService {
  constructor() {
    this.repository = new MetaDataRepository();
  }

  async getMetaDataService() {
    try {
      const response = await this.repository.getMetaDataRepository();

      return {
        success: response.success,
        message: response.message,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async getPackagesService() {
    try {
      const response = await this.repository.getPackagesRepository();

      return {
        success: response.success,
        message: response.message,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }

  async uploadFile(file) {
    const { buffer } = file;
    try {
      const uniqueFileName = `${file}-${Date.now()}`;
      const folder = "Dazhboard/files";

      // Define the S3 upload parameters
      const uploadParams = {
        Bucket: process.env.AWS_BUCKET,
        Key: folder + uniqueFileName,
        Body: buffer,
        ContentType: "image/jpeg",
      };
      try {
        await s3Client.send(new PutObjectCommand(uploadParams));

        console.log("key: ", uploadParams.Key);

        // generate tempory file URL
        const signedUrl = await awsConfig.generateSignedUrl(uploadParams.Key);
        return {
          success: true,
          message: "File uploaded successfully!",
          data: signedUrl,
        };
      } catch (error) {
        // Handle S3 upload error
        console.error("Error uploading to S3:", error);
        return {
          success: false,
          message: error.message,
          data: error,
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
  }
}

export default MetaDataService;

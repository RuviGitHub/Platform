import express from "express";
import MetaDataController from "../controllers/MetaDataController.js";
import multer from 'multer';

const router = express.Router();
const upload = multer();
const metaDataController = new MetaDataController();

router.get("/get-meta-data", metaDataController.getMetaDataController);
router.get("/get-packages", metaDataController.getPackagesController);
router.get("/get-quick-guide-status", metaDataController.getQuickGuideStatus);
router.post('/upload-file', upload.single('file'), metaDataController.uploadFile);
// router.get('/get-file-url', MetaDataController.getPresignedUrl);

export default router;
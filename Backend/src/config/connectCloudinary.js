import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error("File path is required");
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File uploaded successfully on Cloudinary", response.url);
    return response;
  } catch (error) {
    console.log("Error inside Cloudinary upload function: ", error);
    // remove the locally saved temporary file as the upload operation got failed
    return null;
  } finally {
    fs.unlinkSync(localFilePath);
  }
};

export { uploadOnCloudinary };

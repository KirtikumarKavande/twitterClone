const cloudinary = require("cloudinary").v2;
const ApiError = require("../utils/ApiError");
async function uploadToCloudinary(file, profileImg, res) {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    if (profileImg) {
      let incomingImg = profileImg.split("/").pop();

      let finalImg = incomingImg.replace(/\.(jpg|png)$/g, ""); //removing jpg and png
      decodedString = decodeURIComponent(finalImg); //url to normal string
      await cloudinary.uploader.destroy(`twitterClone/${decodedString}`);
    }
    let res = await cloudinary.uploader.upload(file, {
      public_id: new Date(),
      folder: "twitterClone",
    });

    return res.url;
  } catch (error) {
    console.log(error);

    return res
      .status(200)
      .json(new ApiError(400, "problem while uploading file"));
  }
}
module.exports = uploadToCloudinary;

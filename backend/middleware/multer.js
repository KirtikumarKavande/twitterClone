const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (process.env.NODE_ENV === "development") {
      cb(null, "./public");
    } else {
      cb(null, "backend/public");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;

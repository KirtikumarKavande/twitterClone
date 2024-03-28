const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (process.env.NODE_ENV === "production") {
      cb(null, "backend/public");
    } else {
      cb(null, "./public");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
module.exports = upload;

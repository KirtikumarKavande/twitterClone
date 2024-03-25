const { mongoose } = require("mongoose");
const asyncHandler = require("./utils/asyncHandler");

const connectToDB = asyncHandler(async () => {
  let connection = await mongoose.connect(process.env.DATABASE_URL);
  console.log("db connection established");
});

module.exports = connectToDB;

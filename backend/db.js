const { mongoose } = require("mongoose");

async function connectToDB() {
  try {
    let connection = await mongoose.connect(process.env.DATABASE_URL);
   return "DB connection success"
  } catch (error) {
    console.log("something went wrong while connecting to db");
  }
}

module.exports = connectToDB;

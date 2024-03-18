const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const version1Route = require("./routes/v1");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

connectToDB()
  .then(() => {
    console.log("Db connection success");
  })
  .catch(() => {
    console.log("error while connecting");
  });

app.use("/api", version1Route);

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

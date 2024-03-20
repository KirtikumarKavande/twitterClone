const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');


require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(cookieParser());


connectToDB()
  .then(() => {
    console.log("Db connection success");
  })
  .catch(() => {
    console.log("error while connecting");
  });

app.use("/api", routes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

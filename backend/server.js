const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

connectToDB();

app.use("/api", routes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
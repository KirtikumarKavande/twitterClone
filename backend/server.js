const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path")

require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

connectToDB();

app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../", "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname,"../", "frontend", "dist", "index.html"));
	});
}

app.listen(process.env.PORT || 4000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
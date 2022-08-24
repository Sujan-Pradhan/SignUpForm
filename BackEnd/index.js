const express = require("express");
require("dotenv").config();

const expressValidator = require("express-validator");

const DB = require("./database/connection");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoute = require("./routes/userRoute");

const app = express();

app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.use("/api", userRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

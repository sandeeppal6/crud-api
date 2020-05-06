import * as express from "express";
import { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const cors = require("cors");
const mongoose = require("mongoose");
const BlogRoute = require("../routes/Blog");
require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

mongoose.connect(
  `${DB_URL}${DATABASE_NAME}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.error(err);
    console.log("connected to mongodb");
  }
);

app.use(cors());
app.use("/api/v1/blog", BlogRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

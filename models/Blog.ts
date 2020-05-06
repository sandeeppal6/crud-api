import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const BlogSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    default: null,
    require: true,
  },
  content: {
    type: String,
    default: null,
    require: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  updateAt: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Blogs", BlogSchema);

import * as express from "express";
import { Request, Response } from "express";

import { Router } from "express";

const Blogs = require("../models/Blog");

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Blogs.find({}, (err, data) => {
    if (err) throw new Error(err);
    res.send({ status: 200, data: data });
  });
});

module.exports = router;

import * as express from "express";
import { Router } from "express";

const router: Router = express.Router();

router.get("/", (req, res) => {
  res.send("working......");
});

module.exports = router;

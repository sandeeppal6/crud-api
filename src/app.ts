import * as express from "express";
import { Application, Request, Response, NextFunction } from "express";

const PORT = process.env.PORT || 5000;
const app: Application = express();

const cors = require("cors");

app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("test.........");
});

app.listen(PORT, () => {
  console.log("server running......");
});

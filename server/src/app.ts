import express, { json } from "express";
import postRouter from "./routes/postRoutes";

const app = express();

app.use(json());

app.use("/api/v1/posts", postRouter);

app.all("*", (req, res, next) => {
  res.status(200).json({
    status: "fail",
    message: `Can't find this url- ${req.originalUrl} on the server`,
  });
});

export default app;

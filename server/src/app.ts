import express, { json } from "express";
import { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import commentRouter from "./routes/commentRoutes";
import AppError from "./util/AppError";
import { globalErrorController } from "./controllers/errorController";

const app = express();

app.use(cors({}));
app.options("*", cors());

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(compression());

app.use(json());

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/comments", commentRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError(`Can't find this url- ${req.originalUrl} on the server`, 404)
  );
});

// Global error handling
app.use(globalErrorController);

export default app;

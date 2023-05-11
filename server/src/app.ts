import express, { json } from "express";
import postRouter from "./routes/postRoutes";
import userRouter from "./routes/userRoutes";
import AppError from "./util/AppError";
import { NextFunction, Request, Response } from "express";
import { globalErrorController } from "./controllers/errorController";

const app = express();

app.use(json());

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError(`Can't find this url- ${req.originalUrl} on the server`, 404)
  );
});

// Global error handling
app.use(globalErrorController);

export default app;

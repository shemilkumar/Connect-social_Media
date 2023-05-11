import { NextFunction, Request, Response } from "express";
import { ErrorClass } from "../types/modelTypes";

export const globalErrorController = (
  err: ErrorClass,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

import { AuthenticatedRequest } from "../types/modelTypes";
import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";
import catchAsync from "../util/catchAsync";
import AppError from "../util/AppError";

export const getAll = <T>(Model: Model<T>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //
    const doc = await Model.find();

    res.status(200).json({
      status: "success",
      doc,
    });
  });

export const getOne = <T>(Model: Model<T>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    //
    const id = req.params.id;

    const doc = await Model.findById(id);
    if (!doc) return next(new AppError("No document found with that ID", 404));

    res.status(200).json({
      status: "success",
      doc,
    });
  });

export const createOne = <T>(Model: Model<T>) =>
  catchAsync(
    async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
      //
      const doc = await Model.create(req.body);

      res.status(200).json({
        status: "success",
        doc,
      });
    }
  );

export const deleteOne = <T>(Model: Model<T>) =>
  catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      //
      const id = req.params.id;

      const doc = await Model.findByIdAndDelete(id);
      if (!doc)
        return next(new AppError("No document found with that ID", 404));

      res.status(204).json({
        status: "success",
        doc: null,
      });
    }
  );

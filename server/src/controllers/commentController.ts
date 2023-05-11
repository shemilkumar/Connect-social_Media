import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../types/modelTypes";
import * as api from "./handleApis";
import Comment from "../models/commentModel";
import { CommentModel } from "../types/modelTypes";
import catchAsync from "../util/catchAsync";

export const setUserPostIds = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.body.user) req.body.user = req.user?._id;
    if (!req.body.post) req.body.post = req.params.postId;
    next();
  }
);

export const createComment = api.createOne<CommentModel>(Comment);
export const getAllComment = api.getAll<CommentModel>(Comment);
export const getComment = api.getOne<CommentModel>(Comment);
export const deleteComment = api.deleteOne<CommentModel>(Comment);

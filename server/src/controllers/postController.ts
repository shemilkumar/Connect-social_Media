import { AuthenticatedRequest } from "../types/modelTypes";
import { NextFunction, Request, Response } from "express";
import * as api from "./handleApis";
import Post from "../models/postModel";
import { PostModel } from "../types/modelTypes";
import catchAsync from "../util/catchAsync";
import AppError from "../util/AppError";

export const setUser = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.body.user) req.body.user = req.user?._id;
    next();
  }
);

export const likePost = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    //
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) return next(new AppError("Post not found", 404));

    const user = req.user!;

    if (post.likedBy.includes(user._id)) {
      await Post.findByIdAndUpdate(postId, {
        $pull: { likedBy: user._id },
        $inc: { likes: -1 },
      });
    } else {
      post.likedBy.push(user._id);
      post.likes++;
      await post.save();
    }

    res.status(200).json({
      status: "success",
    });
  }
);

export const createPost = api.createOne<PostModel>(Post);
export const getAllPost = api.getAll<PostModel>(Post);
export const getPost = api.getOne<PostModel>(Post);
export const deletePost = api.deleteOne<PostModel>(Post);

import { NextFunction, Request, Response } from "express";
import Post from "../models/postModel";
import catchAsync from "../util/catchAsync";
import AppError from "../util/AppError";
import * as api from "./handleApis";
import { PostModel } from "../types/modelTypes";

// export const getAllPost = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     //
//     const posts = await Post.find();

//     res.status(200).json({
//       status: "success",
//       posts,
//     });
//   }
// );

// export const createPost = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     //
//     const newPost = await Post.create(req.body);

//     res.status(200).json({
//       status: "success",
//       post: newPost,
//     });
//   }
// );

// export const getPost = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     //
//     const postId = req.params.id;

//     const post = await Post.findById(postId);
//     if (!post) return next(new AppError("No document found with that ID", 404));

//     res.status(200).json({
//       status: "success",
//       post,
//     });
//   }
// );

// export const deletePost = catchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     //
//     const postId = req.params.id;

//     const doc = await Post.findByIdAndDelete(postId);

//     if (!doc) return next(new AppError("No document found with that ID", 404));

//     res.status(204).json({
//       status: "success",
//     });
//   }
// );

// export const createPost = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     console.log(req);

//     const newPost = await Post.create(req.body);

//     res.status(200).json({
//       status: "Success",
//       post: newPost,
//     });
//   } catch (error) {
//     res.status(401).json({
//       status: "fail",
//       error,
//     });
//   }
// };

export const createPost = api.createOne<PostModel>(Post);
export const getAllPost = api.getAll<PostModel>(Post);
export const getPost = api.getOne<PostModel>(Post);
export const deletePost = api.deleteOne<PostModel>(Post);
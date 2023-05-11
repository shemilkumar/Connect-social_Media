import { NextFunction, Request, Response } from "express";
import Post from "../models/postModel";

export const getAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const newPost = await Post.create(req.body);
    const posts = await Post.find();

    res.status(200).json({
      status: "Success",
      posts,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
    });
  }
};

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req);

    const newPost = await Post.create(req.body);

    res.status(200).json({
      status: "Success",
      post: newPost,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error,
    });
  }
};

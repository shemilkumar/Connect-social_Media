import * as api from "./handleApis";
import Post from "../models/postModel";
import { PostModel } from "../types/modelTypes";

export const createPost = api.createOne<PostModel>(Post);
export const getAllPost = api.getAll<PostModel>(Post);
export const getPost = api.getOne<PostModel>(Post);
export const deletePost = api.deleteOne<PostModel>(Post);

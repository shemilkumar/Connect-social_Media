import mongoose from "mongoose";
import { PostModel } from "../types/modelTypes";

const postSchema = new mongoose.Schema<PostModel>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // required: [true, "A Post belongs to a user"],
  },
  description: {
    type: String,
    required: [true, "A post must contain description"],
  },
  photo: {
    type: String,
    required: [false],
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model<PostModel>("Post", postSchema);

export default Post;

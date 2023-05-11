import mongoose, { Query } from "mongoose";
import { CommentModel } from "../types/modelTypes";

const commentSchema = new mongoose.Schema<CommentModel>({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: [true, "A Comment must belongs to a post"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A Comment belongs to a user"],
  },
  comment: {
    type: String,
    required: [true, "Provide the comment"],
  },
  commentedAt: {
    type: Date,
    default: Date.now(),
  },
});

commentSchema.pre(
  /^find/,
  function (this: Query<CommentModel[], CommentModel>, next) {
    this.populate({
      path: "user",
      select: "name",
    });
    next();
  }
);

const Comment = mongoose.model<CommentModel>("Comment", commentSchema);

export default Comment;

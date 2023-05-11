import mongoose, { Document } from "mongoose";

export interface PostModel extends Document {
  user: mongoose.Schema.Types.ObjectId;
  description: String;
  photo?: String;
  likes?: [mongoose.Schema.Types.ObjectId];
  postedAt: Date;
}

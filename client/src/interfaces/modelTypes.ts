export interface UserType {
  name: string;
  email: string;
  photo: string;
  _id: string;
}

export interface PostModel {
  _id: string;
  user: UserType;
  description: string;
  likes: number;
  likedBy: [string];
  photo?: string;
  postedAt: Date;
  comments: [CommentModel];
}

export interface CommentModel {
  _id: string;
  comment: string;
  commentedAt: Date;
  user: UserType;
}
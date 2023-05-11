export interface UserType {
  name: string;
  photo: string;
}

export interface PostModel {
  _id: string;
  user: UserType;
  description: string;
  likes: [string];
  photo?: string;
  postedAt: Date;
}

import PostDescription from "../Atoms/PostDescription";
import PostFooter from "../Molecule/PostFooter";
import PostHeader from "../Molecule/PostHeader";
import { FC } from "react";
import { CommentModel, UserType } from "../interfaces/modelTypes";
import AllComments from "./AllComments";

interface DetailedPostProps {
  description: string;
  user: UserType;
  likes: number;
  comments: [CommentModel];
}

const DetailedPost: FC<DetailedPostProps> = ({
  user,
  description,
  likes,
  comments,
}) => {
  // console.log(user);s

  return (
    <section className="flex flex-col items-center justify-center py-2">
      <div className="w-[100%] flex flex-col gap-6 bg-slate-50 shadow-md px-6 py-8 rounded-lg">
        <PostHeader username={user.name} />
        <PostDescription description={description} />
        <PostFooter likes={likes} comments={comments.length} />
        <AllComments comments={comments} />
      </div>
    </section>
  );
};

export default DetailedPost;

import PostDescription from "../Atoms/PostDescription";
import PostFooter from "../Molecule/PostFooter";
import PostHeader from "../Molecule/PostHeader";
import { FC } from "react";
import { UserType } from "../interfaces/modelTypes";

interface PostProps {
  description: string;
  user: UserType;
  likes: [string];
}

const Post: FC<PostProps> = ({ description, user, likes }) => {
  return (
    <section className="flex flex-col justify-center items-center py-2">
      <div className="w-[100%] flex flex-col gap-6 bg-slate-50 shadow-md px-6 py-8 rounded-lg">
        <PostHeader username={user.name} />
        <PostDescription description={description} />
        <PostFooter likes={likes.length} comments={2} />
      </div>
    </section>
  );
};

export default Post;

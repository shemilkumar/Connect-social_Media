import PostDescription from "../Atoms/PostDescription";
import PostFooter from "../Molecule/PostFooter";
import PostHeader from "../Molecule/PostHeader";
import { FC } from "react";
import { CommentModel, UserType } from "../interfaces/modelTypes";
import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  description: string;
  user: UserType;
  likes: number;
  comments: [CommentModel];
}

const Post: FC<PostProps> = ({ id, description, user, likes, comments }) => {
  return (
    <section className="flex flex-col items-center justify-center py-2">
      <div className="w-[100%] flex flex-col gap-6 bg-slate-50 shadow-md px-6 py-8 rounded-lg">
        <Link to={`/posts/${id}`}>
          <PostHeader username={user.name} />
        </Link>{" "}
        <PostDescription description={description} />
        <PostFooter likes={likes} comments={comments.length} id={id} />
      </div>
    </section>
  );
};

export default Post;

import { FC } from "react";
import LikeIcon from "../components/icons/LikeIcon";
import CommentIcon from "../components/icons/CommentIcon";
import NumberOfLikes from "../Atoms/NumberOfLikes";
import NumberOfComments from "../Atoms/NumberOfComments";
import { Link } from "react-router-dom";

interface PostFooterProps {
  likes: number;
  comments: number;
  id: string;
}

const PostFooter: FC<PostFooterProps> = ({ likes, comments, id }) => {
  return (
    <div className="flex items-center gap-2">
      <Link to={`/posts/${id}`}>
        <LikeIcon />
      </Link>
      <Link to={`/posts/${id}`}>
        <CommentIcon />
      </Link>
      <NumberOfLikes likes={likes} />
      <Link to={`/posts/${id}`}>
        <NumberOfComments comments={comments} />
      </Link>
    </div>
  );
};

export default PostFooter;

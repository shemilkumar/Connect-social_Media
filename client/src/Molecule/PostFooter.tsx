import { FC } from "react";
import LikeIcon from "../components/icons/LikeIcon";
import CommentIcon from "../components/icons/CommentIcon";
import NumberOfLikes from "../Atoms/NumberOfLikes";
import NumberOfComments from "../Atoms/NumberOfComments";

interface PostFooterProps {
  likes: number;
  comments: number;
}

const PostFooter: FC<PostFooterProps> = ({ likes, comments }) => {
  return (
    <div className="flex gap-2 items-center">
      <LikeIcon />
      <CommentIcon />
      <NumberOfLikes likes={likes} />
      <NumberOfComments comments={comments} />
    </div>
  );
};

export default PostFooter;

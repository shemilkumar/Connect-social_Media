import { FC, useEffect, useState } from "react";
import LikeIcon from "../components/icons/LikeIcon";
import CommentIcon from "../components/icons/CommentIcon";
import NumberOfLikes from "../Atoms/NumberOfLikes";
import NumberOfComments from "../Atoms/NumberOfComments";
import { Link } from "react-router-dom";
import { FETCH_POST_URL } from "../constants/urls";
import useLike from "../hooks/useLike";

interface PostFooterProps {
  likes: number;
  comments: number;
  id: string;
  likedBy: [string];
}

const PostFooter: FC<PostFooterProps> = ({ likes, comments, id, likedBy }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (userID) setIsLiked(likedBy.includes(userID));
    // console.log(likedBy, isLiked);
  }, [likedBy]);

  //
  const mutation = useLike(`${FETCH_POST_URL}${id}/like`);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    const data = await mutation.mutateAsync();
    console.log(data);
    if (data.status === "success") {
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div onClick={handleLike}>
        <LikeIcon className={isLiked ? "fill-blue-400" : "fill-none"} />
      </div>
      <Link to={`/posts/${id}`}>
        <CommentIcon />
      </Link>
      <NumberOfLikes likes={likeCount} />
      <Link to={`/posts/${id}`}>
        <NumberOfComments comments={comments} />
      </Link>
    </div>
  );
};

export default PostFooter;

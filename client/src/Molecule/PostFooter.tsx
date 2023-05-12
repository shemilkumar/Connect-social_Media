import { FC, useEffect, useState } from "react";
import LikeIcon from "../components/icons/LikeIcon";
import CommentIcon from "../components/icons/CommentIcon";
import NumberOfLikes from "../Atoms/NumberOfLikes";
import NumberOfComments from "../Atoms/NumberOfComments";
import { Link } from "react-router-dom";
import { FETCH_POST_URL } from "../constants/urls";
import useLike from "../hooks/useLike";
import dateConverter from "../util/dateConverter";

interface PostFooterProps {
  likes: number;
  comments: number;
  id: string;
  likedBy: [string];
  postedAt: Date;
  handleCommentBox: () => void;
}

const PostFooter: FC<PostFooterProps> = ({
  likes,
  comments,
  id,
  likedBy,
  postedAt,
  handleCommentBox,
}) => {
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

    try {
      const data = await mutation.mutateAsync();
      console.log(data);
      if (data.status === "success") {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response) alert(error.response.data.message);
      else alert(error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 sm:text-sm">
        <div onClick={handleLike}>
          <LikeIcon className={isLiked ? "fill-blue-400" : "fill-none"} />
        </div>
        <Link to={`/posts/${id}`}>
          <div onClick={handleCommentBox}>
            <CommentIcon />
          </div>
        </Link>
        <NumberOfLikes likes={likeCount} />
        <Link to={`/posts/${id}`}>
          <NumberOfComments comments={comments} />
        </Link>
      </div>

      <div>
        <span className="text-sm text-gray-500">{dateConverter(postedAt)}</span>
      </div>
    </div>
  );
};

export default PostFooter;

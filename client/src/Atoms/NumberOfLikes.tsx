import { FC } from "react";

interface NumberOfLikesProps {
  likes: number;
}

const NumberOfLikes: FC<NumberOfLikesProps> = ({ likes }) => {
  return <div>{`${likes} Likes`}</div>;
};

export default NumberOfLikes;

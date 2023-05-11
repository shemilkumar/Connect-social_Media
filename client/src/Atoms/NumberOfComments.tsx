import { FC } from "react";

interface NumberOfCommentsProps {
  comments: number;
}

const NumberOfComments: FC<NumberOfCommentsProps> = ({ comments }) => {
  return <div>{`${comments} Comments`}</div>;
};

export default NumberOfComments;

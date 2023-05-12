import { FC } from "react";

interface NumberOfCommentsProps {
  comments: number;
}

const NumberOfComments: FC<NumberOfCommentsProps> = ({ comments }) => {
  return (
    <div className="hover:underline underline-offset-4">{`${comments} Comments`}</div>
  );
};

export default NumberOfComments;

import { FC } from "react";

interface PostDescriptionProps {
  description: string;
}

const PostDescription: FC<PostDescriptionProps> = ({ description }) => {
  return <div>{description}</div>;
};

export default PostDescription;

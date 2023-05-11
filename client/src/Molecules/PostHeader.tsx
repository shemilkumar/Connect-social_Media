import { FC } from "react";
import ThreeDotIcon from "../components/icons/ThreeDot";
import UserPhotoIcon from "../Atoms/UserPhotoIcon";
import Username from "../Atoms/Username";

interface PostHeaderProps {
  username: string;
}

const PostHeader: FC<PostHeaderProps> = ({ username }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <UserPhotoIcon />
        <Username username={username} />
      </div>
      <div className="flex items-center">
        <ThreeDotIcon />
      </div>
    </div>
  );
};

export default PostHeader;

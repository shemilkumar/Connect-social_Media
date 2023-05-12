import { FC } from "react";
import UserPhotoIcon from "../Atoms/UserPhotoIcon";
import { CommentModel } from "../interfaces/modelTypes";

const Comment: FC<CommentModel> = ({ comment, commentedAt, user }) => {
  return (
    <div className="flex w-full gap-4 px-4">
      <UserPhotoIcon />
      <div className="flex flex-col w-full gap-2 px-3 py-2 text-sm bg-gray-200 rounded-xl">
        <div className="flex justify-between">
          <div className="mb-1 font-semibold">{user.name}</div>
          <div className="text-xs text-gray-500">
            {new Date(commentedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="text-gray-700">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;

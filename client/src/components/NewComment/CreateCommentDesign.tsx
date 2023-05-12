import { FC } from "react";
import UserPhotoIcon from "../../Atoms/UserPhotoIcon";
import TextArea from "../../Atoms/TextArea";
import SendIcon from "../icons/SendIcon";

interface CreateCommentDesignProps {
  handleClick: (e: React.MouseEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CreateCommentDesign: FC<CreateCommentDesignProps> = ({
  onChange,
  handleClick,
}) => {
  return (
    <div className="flex w-full gap-4 px-4">
      <UserPhotoIcon />
      <div className="relative flex flex-col w-full gap-2 px-3 py-0 text-sm rounded-xl">
        <TextArea
          name="comment"
          placeHolder="Add a comment..."
          rows={3}
          className="bg-gray-100 border-2 shadow-none"
          onChange={onChange}
        />
        <div
          className="absolute cursor-pointer right-6 bottom-2 hover:scale-110"
          onClick={handleClick}
        >
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default CreateCommentDesign;

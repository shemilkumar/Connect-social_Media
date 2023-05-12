import { Link } from "react-router-dom";
import Input from "../Atoms/Input";
import UserPhotoIcon from "../Atoms/UserPhotoIcon";

const WritePost = () => {
  return (
    <div className="flex gap-2 p-6 bg-white shadow-lg rounded-xl">
      <UserPhotoIcon />
      <Link to={"/newPost"} className="w-full">
        <Input
          className="w-full px-4 bg-gray-200 rounded-full shadow-none"
          type="text"
          name="newpost"
          placeHolder="What on your mind ? write a post..."
        />
      </Link>
    </div>
  );
};

export default WritePost;

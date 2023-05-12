import { useState } from "react";
import { FETCH_POST_URL } from "../../constants/urls";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import CreatePostDesign from "./CreatePostDesign";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const mutation = useCreateNewPost(FETCH_POST_URL);
  const [description, setDescription] = useState<string>("");
  const navigate = useNavigate();

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handlePost = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(description);
    const data = await mutation.mutateAsync({ description });
    if (data.status === "success") navigate("/");
    console.log(data);
  };

  return (
    <CreatePostDesign
      handleClick={handlePost}
      onChange={handleDescriptionChange}
    />
  );
};

export default CreatePost;

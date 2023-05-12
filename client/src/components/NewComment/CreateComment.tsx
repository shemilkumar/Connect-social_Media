import { useState } from "react";
import { FETCH_POST_URL } from "../../constants/urls";
import useCreateNewComment from "../../hooks/useCreateNewComment";
import CreateCommentDesign from "./CreateCommentDesign";
import { useParams } from "react-router-dom";
import { FC } from "react";
import { CommentModel } from "../../interfaces/modelTypes";

interface CreateCommentProps {
  toggleComment: () => void;
  onSubmit: (comment: CommentModel) => void;
}

const CreateComment: FC<CreateCommentProps> = ({ toggleComment, onSubmit }) => {
  const postId = useParams().id;
  // console.log(`${FETCH_POST_URL}${postId}/comment`);

  const mutation = useCreateNewComment(`${FETCH_POST_URL}${postId}/comments`);
  const [newComment, setNewComment] = useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleCommentPost = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const data = await mutation.mutateAsync({ comment: newComment });
      toggleComment();
      if (data.status === "success") {
        console.log(data.doc);
        onSubmit(data.doc);
        // window.location.reload();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response) alert(error.response.data.message);
      else alert(error);
    }
  };

  return (
    <CreateCommentDesign
      handleClick={handleCommentPost}
      onChange={handleCommentChange}
    />
  );
};

export default CreateComment;

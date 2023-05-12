import { CommentModel } from "../interfaces/modelTypes";
import Comment from "./Comment";

const AllComments = ({ comments }: { comments: CommentModel[] }) => {
  return (
    <>
      {comments.length > 0 &&
        comments.map((comment: CommentModel) => {
          return <Comment {...comment} key={comment._id} />;
        })}
    </>
  );
};

export default AllComments;

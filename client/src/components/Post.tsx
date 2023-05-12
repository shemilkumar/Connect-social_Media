import PostDescription from "../Atoms/PostDescription";
import PostFooter from "../Molecule/PostFooter";
import PostHeader from "../Molecule/PostHeader";
import { FC, useState } from "react";
import { CommentModel, UserType } from "../interfaces/modelTypes";
import { Link } from "react-router-dom";
import AllComments from "./AllComments";
import CreateComment from "./NewComment/CreateComment";

interface PostProps {
  id: string;
  description: string;
  user: UserType;
  likes: number;
  likedBy: [string];
  comments: CommentModel[];
  detailedPost: boolean;
  postedAt: Date;
}

const Post: FC<PostProps> = ({
  id,
  description,
  user,
  likes,
  comments,
  likedBy,
  detailedPost,
  postedAt,
}) => {
  const [isCommentClicked, setIsCommentClicked] = useState<boolean>(false);
  const [postComments, setPostComments] = useState<CommentModel[]>(comments);

  // Callback function to update comments array
  const handleCommentSubmit = (newComment: CommentModel) => {
    // console.log(newComment);
    setPostComments([...postComments, newComment]);
  };

  const handleCommentOpening = () => {
    setIsCommentClicked(!isCommentClicked);
  };

  return (
    <section className="flex flex-col items-center justify-center py-2">
      <div className="w-full min-h-[220px] flex flex-col justify-between gap-6 bg-slate-50 shadow-md px-6 py-8 rounded-lg">
        <Link to={`/posts/${id}`}>
          <PostHeader username={user.name} />
        </Link>{" "}
        <PostDescription description={description} />
        <PostFooter
          likes={likes}
          comments={comments.length}
          id={id}
          likedBy={likedBy}
          handleCommentBox={handleCommentOpening}
          postedAt={postedAt}
        />
        {isCommentClicked && (
          <CreateComment
            toggleComment={handleCommentOpening}
            onSubmit={handleCommentSubmit}
          />
        )}
        {detailedPost && <AllComments comments={postComments} />}
      </div>
    </section>
  );
};

export default Post;

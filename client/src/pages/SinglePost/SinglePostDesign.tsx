import { FC } from "react";
import Layout from "../../components/Layout";
import { PostModel } from "../../interfaces/modelTypes";
import DetailedPost from "../../components/DetailedPost";
import Navbar from "../../components/Navbar";

interface SinglePostDesignProps {
  post: PostModel;
}

const SinglePostDesign: FC<SinglePostDesignProps> = ({ post }) => {
  // console.log(post.user);

  return (
    <Layout>
      <Navbar />
      <DetailedPost
        key={post._id}
        description={post.description}
        user={post.user}
        likes={post.likes}
        comments={post.comments}
      />
    </Layout>
  );
};

export default SinglePostDesign;

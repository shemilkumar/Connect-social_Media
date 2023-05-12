import { FC } from "react";
import Layout from "../../components/Layout";
import { PostModel } from "../../interfaces/modelTypes";
import Navbar from "../../components/Navbar";
import Post from "../../components/Post";

interface SinglePostDesignProps {
  post: PostModel;
}

const SinglePostDesign: FC<SinglePostDesignProps> = ({ post }) => {
  // console.log(post);
  return (
    <Layout>
      <Navbar />
      <Post
        key={post._id}
        id={post._id}
        description={post.description}
        user={post.user}
        likes={post.likes}
        comments={post.comments}
        likedBy={post.likedBy}
        detailedPost={true}
      />
    </Layout>
  );
};

export default SinglePostDesign;

import useFetchAllPosts from "../hooks/useFetchAllPost";
import { PostModel } from "../interfaces/modelTypes";
import Post from "./Post";

const AllPosts = () => {
  const { data, isLoading } = useFetchAllPosts();
  console.log(data);

  return (
    <>
      {isLoading
        ? "Loading"
        : data.doc.map((post: PostModel) => {
            return (
              <Post
                key={post._id}
                description={post.description}
                user={post.user}
                likes={post.likes}
              />
            );
          })}
    </>
  );
};

export default AllPosts;

import { useEffect, useState } from "react";
import { FETCH_POST_URL } from "../constants/urls";
import useFetch from "../hooks/useFetch";
import { PostModel } from "../interfaces/modelTypes";
import Post from "./Post";

const AllPosts = () => {
  const { data } = useFetch(FETCH_POST_URL);
  const [allPosts, setAllPosts] = useState<PostModel[]>();

  useEffect(() => {
    if (data?.doc.length > 0) setAllPosts(data.doc);
  }, [data]);

  return (
    <>
      {!allPosts
        ? "Loading"
        : allPosts.map((post: PostModel) => {
            return (
              <Post
                key={post._id}
                id={post._id}
                description={post.description}
                user={post.user}
                likes={post.likes}
                comments={post.comments}
              />
            );
          })}
    </>
  );
};

export default AllPosts;

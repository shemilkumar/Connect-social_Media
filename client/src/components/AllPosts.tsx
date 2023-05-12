import { useEffect, useState } from "react";
import { FETCH_POST_URL } from "../constants/urls";
import useFetch from "../hooks/useFetch";
import { PostModel } from "../interfaces/modelTypes";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const AllPosts = () => {
  const loggedIn = localStorage.getItem("token");
  const { data, error } = useFetch(FETCH_POST_URL);
  const [allPosts, setAllPosts] = useState<PostModel[]>();
  const navigate = useNavigate();

  useEffect(() => {
    !loggedIn && navigate("/login");

    if (error) {
      alert(error);
      navigate("/login");
    }

    if (data?.doc.length > 0) setAllPosts(data.doc);
  }, [data, error, navigate, loggedIn]);

  return (
    <>
      {!allPosts ? (
        <Spinner />
      ) : (
        allPosts.map((post: PostModel) => {
          return (
            <Post
              key={post._id}
              id={post._id}
              description={post.description}
              user={post.user}
              likes={post.likes}
              likedBy={post.likedBy}
              comments={post.comments}
              detailedPost={false}
              postedAt={post.postedAt}
            />
          );
        })
      )}
    </>
  );
};

export default AllPosts;

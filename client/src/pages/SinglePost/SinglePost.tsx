// import { FC } from "react";
import { useEffect, useState } from "react";
import { FETCH_POST_URL } from "../../constants/urls";
import useFetch from "../../hooks/useFetch";
import SinglePostDesign from "./SinglePostDesign";
import { useParams } from "react-router-dom";
import { PostModel } from "../../interfaces/modelTypes";

const SinglePost = () => {
  const { id } = useParams();
  const { data } = useFetch(`${FETCH_POST_URL}/${id}`);
  const [post, setPost] = useState<PostModel>();

  useEffect(() => {
    if (data?.doc) setPost(data.doc);
  }, [data]);

  // console.log(post?.user);

  return <>{post?.user ? <SinglePostDesign post={post} /> : "Loading..."}</>;
};

export default SinglePost;

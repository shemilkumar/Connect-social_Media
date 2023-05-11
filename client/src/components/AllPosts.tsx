import { FC } from "react";
import useFetchAllPosts from "../hooks/useFetchAllPost";

interface AllPostsProps {}

const AllPosts: FC<AllPostsProps> = ({}) => {
  const { data, isLoading, error } = useFetchAllPosts();

  return <div>{JSON.stringify(data)}</div>;
};

export default AllPosts;

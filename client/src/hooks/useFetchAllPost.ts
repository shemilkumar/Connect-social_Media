import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetchAllPosts() {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get("http://127.0.0.1:5000/api/v1/posts/");
      return data;
    },
  });
}

export default useFetchAllPosts;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetch(URL: string) {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
}

// export default useFetchAllPosts;
export default useFetch;

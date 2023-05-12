import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface PostData {
  description: string;
}

const useCreateNewPost = (URL: string) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const mutation = useMutation(
    async (postData: PostData) => {
      const response = await axios.post(URL, postData, config);
      return response.data;
    }
    // {
    //   onSuccess: () => {
    //     // do something after successful signup
    //   },
    // }
  );

  return mutation;
};

export default useCreateNewPost;

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CommentData {
  comment: string;
}

const useCreateNewComment = (URL: string) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const mutation = useMutation(
    async (commmentData: CommentData) => {
      const response = await axios.post(URL, commmentData, config);
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

export default useCreateNewComment;

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useLike = (URL: string) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const mutation = useMutation(
    async () => {
      const response = await axios.post(URL, {}, config);
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

export default useLike;

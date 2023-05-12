import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface SignUpData {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

const usePost = (URL: string) => {
  const mutation = useMutation(
    async (userData: SignUpData) => {
      const response = await axios.post(URL, userData);
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

export default usePost;

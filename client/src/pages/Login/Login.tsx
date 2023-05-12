import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../constants/urls";
import usePost from "../../hooks/usePost";
import LoginDesign from "./LoginDesign";
import { DataFromAuthentication } from "../../interfaces/APIResultTypes";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const mutation = usePost(LOGIN_URL);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearInputs = (): void => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill email and password");
      return;
    }

    try {
      const data = (await mutation.mutateAsync({
        email,
        password,
      })) as DataFromAuthentication;

      // console.log(data);
      if (data.status === "success") {
        navigate("/");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user._id);
        localStorage.setItem("userName", data.user.name);
        clearInputs();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error?.response) alert(error.response.data.message);
      else alert(error);
    }
  };

  return (
    <LoginDesign
      email={email}
      password={password}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;

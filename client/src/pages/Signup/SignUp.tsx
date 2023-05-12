import { ChangeEvent, useState } from "react";
import SignUpDesign from "./SignUpDesign";
import validator from "../../util/validator";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../../constants/urls";
import usePost from "../../hooks/usePost";
import { useDispatch } from "react-redux";
import { setUserData } from "../../Redux/Slicers/userSlicer";
import { DataFromAuthentication } from "../../interfaces/APIResultTypes";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const mutation = usePost(SIGNUP_URL);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(e.target.value);
        break;
      default:
        break;
    }
  };

  const clearInputs = (): void => {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) {
      alert("Fill every fields");
      return;
    }

    const validatedResult = validator({ email, password });
    if (validatedResult.pass === false) {
      alert(validatedResult.message);
      return;
    }

    if (password !== passwordConfirm) {
      alert("Passwords are not same");
      return;
    }

    // console.log("SignUp Success");
    try {
      const data = (await mutation.mutateAsync({
        name,
        email,
        password,
        passwordConfirm,
      })) as DataFromAuthentication;

      if (data.status === "success") {
        navigate("/");
        dispatch(setUserData({ name, email }));
        localStorage.setItem("token", data.token);
        localStorage.setItem("userID", data.user._id);
        localStorage.setItem("userName", data.user.name);
        clearInputs();
      }
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      if (error?.response) alert(error.response.data.message);
      else alert(error);
    }
  };

  return (
    <SignUpDesign
      name={name}
      email={email}
      password={password}
      passwordConfirm={passwordConfirm}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUp;

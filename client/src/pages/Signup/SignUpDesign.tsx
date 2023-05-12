import { FC } from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Layout from "../../components/Layout";
import TermsNConditions from "../../Atoms/TermsNConditions";
import SignUpLoginNavigate from "../../Atoms/SignUpLoginNavigate";
import Navbar from "../../components/Navbar";

interface SignUpDesignProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SignUpDesign: FC<SignUpDesignProps> = ({
  name,
  email,
  password,
  passwordConfirm,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Layout>
      \{" "}
      <div className="flex flex-col min-h-screen">
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white shadow-lg rounded-xl">
            <h1 className="mb-8 text-3xl text-center">SignUp</h1>
            <form className="m-auto">
              <Input
                type="text"
                name="name"
                placeHolder="Name"
                value={name}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="email"
                placeHolder="email@example.com"
                value={email}
                onChange={handleChange}
              />

              <Input
                type="password"
                name="password"
                placeHolder="passwod"
                value={password}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="passwordConfirm"
                placeHolder="Confirm password"
                value={passwordConfirm}
                onChange={handleChange}
              />

              <Button
                type="submit"
                children="SignUp"
                handleOnClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleSubmit(e)
                }
              />
              <TermsNConditions />
              <SignUpLoginNavigate
                navigateTo="login"
                description="Already have an account?"
                to="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpDesign;

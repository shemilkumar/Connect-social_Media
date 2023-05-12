import { FC } from "react";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Layout from "../../components/Layout";
import TermsNConditions from "../../Atoms/TermsNConditions";
import SignUpLoginNavigate from "../../Atoms/SignUpLoginNavigate";

interface LoginDesignProps {
  email: string;
  password: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginDesign: FC<LoginDesignProps> = ({
  email,
  password,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
          <div className="w-full px-6 py-8 text-black bg-white shadow-lg rounded-xl">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <form className="m-auto">
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
              <Button
                type="submit"
                children="Login"
                handleOnClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleSubmit(e)
                }
              />
              <SignUpLoginNavigate
                navigateTo="signup"
                description="Don't have an account?"
                to="SignUp"
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginDesign;

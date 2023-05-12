import { FC } from "react";
import { Link } from "react-router-dom";

interface SignUpLoginNavigateProps {
  navigateTo: string;
  description: string;
  to: string;
}

const SignUpLoginNavigate: FC<SignUpLoginNavigateProps> = ({
  navigateTo,
  description,
  to,
}) => {
  return (
    <Link to={`/${navigateTo}`}>
      <div className="mt-6 text-center text-grey-dark">
        {description}
        <span className="ml-1 font-semibold">{to}</span>
      </div>
    </Link>
  );
};

export default SignUpLoginNavigate;

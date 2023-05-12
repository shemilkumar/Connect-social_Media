import { FC } from "react";

interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  className?: string;
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  handleOnClick,
}) => {
  return (
    <button
      type={type}
      className={`w-full py-3 my-1 font-semibold text-center text-white rounded bg-secondary hover:bg-blue-800 focus:outline-none bg-blue-600 ${className}`}
      onClick={(e) => handleOnClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;

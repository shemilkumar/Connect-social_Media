import { FC } from "react";

interface InputProps {
  type: "text" | "number" | "password";
  className?: string;
  name: string;
  placeHolder: string;
  value: string | number;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  type,
  className,
  name,
  placeHolder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`block w-full p-3 mb-4 border-0 border-b-2 rounded outline-none border-grey-light dark:bg-white ${className}`}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default Input;

import { FC } from "react";

interface TextAreaProps {
  name: string;
  rows: number;
  placeHolder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaProps> = ({
  name,
  rows,
  placeHolder,
  className,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      rows={rows}
      className={`w-full p-4 shadow-xl rounded-xl ${className}`}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

export default TextArea;

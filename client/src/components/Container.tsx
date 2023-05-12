import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[40%]">{children}</div>
    </div>
  );
};

export default Container;

import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[40%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;

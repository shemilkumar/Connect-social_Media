import { FC } from "react";

interface UsernameProps {
  username: string;
}

const Username: FC<UsernameProps> = ({ username }) => {
  return <div className="text-base">{username}</div>;
};

export default Username;

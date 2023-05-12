import { useSelector } from "react-redux";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.user.user);

  return (
    <header className="flex items-center justify-between py-4">
      <nav className="text-4xl font-bold">Connect</nav>
      <nav className="text-3xl font-bold">{user.name}</nav>
    </header>
  );
};

export default Navbar;

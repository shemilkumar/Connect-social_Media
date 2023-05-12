import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.user.user);

  return (
    <header className="flex items-center justify-between py-4">
      <Link to={`/`} className="text-4xl font-bold">
        <span className="text-blue-700">C</span>
        <span className="text-gray-800">o</span>
        <span className="text-blue-700">nnect</span>
      </Link>
      <nav className="text-3xl font-bold">{user.name}</nav>
    </header>
  );
};

export default Navbar;

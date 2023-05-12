import { Link, useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import logout from "../util/logout";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userName");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <Link to={`/`} className="text-4xl font-bold">
        <span className="text-blue-700">C</span>
        <span className="text-gray-800">o</span>
        <span className="text-blue-700">nnect</span>
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <nav className="text-lg font-semibold text-gray-600">{user}</nav>
          <Button
            children="Logout"
            type="button"
            handleOnClick={handleLogoutClick}
            className="w-24 py-1.5"
          />
        </div>
      ) : (
        <Button
          children="Login"
          type="button"
          handleOnClick={handleLoginClick}
          className="w-24 py-1.5"
        />
      )}
    </header>
  );
};

export default Navbar;

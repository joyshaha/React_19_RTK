import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../assets/react.svg";
// import tranzo from "../assets/tranzo.jpg";
import simple from "../assets/simple.jpg";

export default function Sidebar() {
  const navigate = useNavigate();

  const isActive = ({ isActive }) => {
    return isActive ? "text-blue-500 font-semibold" : "text-gray-500";
  };

  return (
    <aside className="max-w-52 min-w-48 w-full bg-white shadow-lg p-4 flex flex-col justify-between items-center">
      <nav className="flex flex-col">
        <div className="flex cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={simple}
            alt="logo"
            // className="w-10 h-10 object-cover rounded-md"
            className="w-4/4 h-2/4 object-cover rounded-lg"
            // onClick={() => navigate("/")}
          />
          {/* <h1 className="text-xl font-semibold"></h1> */}
        </div>
        <div className="flex flex-col gap-4">
          <NavLink to="/" className={isActive}>
            Home
          </NavLink>
          <NavLink to="/redux-thunk" className={isActive}>
            Posts
          </NavLink>
          <NavLink to="/videos" className={isActive}>
            Videos
          </NavLink>
          <NavLink to="/transactions" className={isActive}>
            Transactions
          </NavLink>
          <NavLink to="/podcasts" className={isActive}>
            Podcasts
          </NavLink>
          <NavLink to="/list" className={isActive}>
            List
          </NavLink>
          <NavLink to="/about" className={isActive}>
            About
          </NavLink>
          <NavLink to="/basic" className={isActive}>
            Basic
          </NavLink>
        </div>
        {/* <Link to="/signin" className="hover:text-blue-500 font-medium">Sign In</Link>
        <Link to="/signup" className="hover:text-blue-500 font-medium">Sign Up</Link> */}
      </nav>
    </aside>
  );
}

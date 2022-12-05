import logoWhite from "../../Assets/images/logo-white.png";
import logoDark from "../../Assets/images/logo-dark.png";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import BgContext from "../../Context/BgContext";
import { useAuth } from "../../Context/AuthContext";
const navItems = [
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/destination",
    text: "Destination",
  },
];
export default function Header() {
  const { bg } = useContext(BgContext);
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async function () {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`flex flex-wrap lg:flex-nowrap items-center justify-between gap-5 py-4 font-semibold ${
        bg ? "text-gray-200" : "text-gray-700"
      }`}
    >
      <Link to="/">
        <img
          src={bg ? logoWhite : logoDark}
          alt="logo"
          className="w-[80px] lg:w-[100px]"
        />
      </Link>
      <div
        className={` ${
          bg ? "relative" : "hidden"
        } order-2 w-full lg:w-72 2xl:w-96`}
      >
        <input
          type="text"
          className="w-full px-2 py-1 text-lg font-bold text-gray-700 transition duration-300 border-0 rounded bg-gray-50/60 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2"
        />
        <FaSearch className="absolute text-xl right-4 top-2" />
      </div>
      <nav className="flex justify-between order-1 w-full gap-2 sm:w-auto md:gap-10 xs:text-sm lg:text-lg lg:order-2 ">
        <div className="space-x-2 xs:space-x-0">
          {navItems.map((el, i) => (
            <NavLink
              key={i}
              to={el.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-400  text-white xs:px-1 px-2 py-1 rounded transition duration-300 shadow-md shadow-amber-200"
                  : "px-2 py-1 rounded transition duration-300 hover:bg-amber-400 xs:px-1 hover:text-white"
              }
            >
              {el.text}
            </NavLink>
          ))}
        </div>

        <div>
          {currentUser?.emailVerified ? (
            <div className="flex items-center gap-2">
              <span>{currentUser.displayName}</span>
              <FaSignOutAlt
                onClick={handleLogout}
                className="cursor-pointer text-amber-400"
              />
            </div>
          ) : (
            <div className="space-x-2">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-400  text-white px-2 py-1 rounded transition duration-300 shadow-md shadow-amber-200"
                    : "px-2 py-1 rounded transition duration-300 hover:bg-amber-400 hover:text-white"
                }
              >
                Signup
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-amber-400  text-white px-2 py-1 rounded transition duration-300 shadow-md shadow-amber-200"
                    : "px-2 py-1 rounded transition duration-300 hover:bg-amber-400 hover:text-white"
                }
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      {/* <div className="order-3">
        {currentUser?.uid ? (
          <>
            <span>{currentUser.displayName}</span>
            <FaSignOutAlt onClick={handleLogout} />
          </>
        ) : (
          <div className="space-x-2">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-400  text-white px-2 py-1 rounded transition duration-300 shadow-md shadow-amber-200"
                  : "px-2 py-1 rounded transition duration-300 hover:bg-amber-400 hover:text-white"
              }
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-amber-400  text-white px-2 py-1 rounded transition duration-300 shadow-md shadow-amber-200"
                  : "px-2 py-1 rounded transition duration-300 hover:bg-amber-400 hover:text-white"
              }
            >
              Login
            </NavLink>
          </div>
        )}
      </div> */}
    </div>
  );
}

import React, { use, useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savesTheme = localStorage.getItem("theme");
    const systemPefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    if (savesTheme) {
      setTheme(savesTheme);
    } else if (systemPefersDark) {
      setTheme("dark");
    }
  }, []);
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const { handleLogOut, setUser } = useContext(AuthContext);
  // console.log(handleLogOut)
  const handleLogoutButton = () => {
    handleLogOut()
      .then(() => {
        setUser(null);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logout successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  // console.log(user)
  const isUserExist = !!user;
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/Assignments"
              >
                Assignments
              </NavLink>
              
            </li>
            <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/CreateAssignments"
                  >
                    Create Assignments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/MyAttemptedAssignments"
                  >
                    My Attempted Assignments
                  </NavLink>
                </li>
          </ul>
        </div>
        <img
          className="w-12 h-12 rounded-full "
          src="https://i.ibb.co/84zxHrL9/focused-students-using-tablet-discussing-information.jpg"
          alt=""
        />
        <a className="btn btn-ghost text-xl"> Online Group-Study</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? " text-blue-500" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? " text-blue-500" : "")}
              to="/Assignments"
            >
              Assignments page
            </NavLink>
          </li>
          <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/CreateAssignments"
                  >
                    Create Assignments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/MyAttemptedAssignments"
                  >
                    My Attempted Assignments
                  </NavLink>
                </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {isUserExist ? (
          <>
            {" "}
            <div className="dropdown">
              <div
                tabIndex={0}
                data-tip={user?.displayName}
                className="pl-26 tooltip tooltip-left"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full "
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box   w-40 p-2 shadow"
              >
                <h2>{user?.displayName}</h2>
                <h1>{user?.email}</h1>
                <ul>
                    <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/CreateAssignments"
                  >
                    Create Assignments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " text-blue-500" : ""
                    }
                    to="/MyAttemptedAssignments"
                  >
                    My Attempted Assignments
                  </NavLink>
                </li>
                </ul>
                <h1 className="text-2xl font-bold"></h1>
                <button
                  type="button"
                  onClick={handleLogoutButton}
                  className="bg-blue-400 text-white px-3 py-2 rounded"
                >
                  Logout
                </button>
              </ul>
            </div>{" "}
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="bg-green-400 text-black w-20 py-2 rounded"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-green-400 text-black w-20 py-2 rounded"
            >
              Login
            </button>
          </>
        )}

        <button
          onClick={toggleTheme}
          aria-label={`switch to ${theme === "dark" ? "light" : "dark"}mode`}
          className=" dark:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? (
            <span>
              <CiDark size={30} />
            </span>
          ) : (
            <span>
              <CiLight size={30} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

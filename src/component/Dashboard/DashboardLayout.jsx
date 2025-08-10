import React from "react";
import { NavLink, Outlet } from "react-router";
import Navbar from "../Navbar";
import { FaClipboardList, FaClock, FaFileAlt, FaHome, FaPlusCircle } from "react-icons/fa";


const DashboardLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-500 flex items-center space-x-2 font-semibold" : "flex items-center space-x-2";
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Page content here */}
        <Navbar></Navbar>
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}

                <li>
        <NavLink to="/" className={linkClass}>
          <FaHome className="text-red-500" /> {/* icon color can be changed */}
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/assignments" className={linkClass}>
          <FaClipboardList className="text-green-500" />
          <span>Assignments page</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/CreateAssignments" className={linkClass}>
          <FaPlusCircle className="text-purple-500" />
          <span>Create Assignments</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/MyAttemptedAssignments" className={linkClass}>
          <FaFileAlt className="text-yellow-500" />
          <span>My Assignment Page</span>
        </NavLink>
      </li>

      <li>
        <NavLink to="dashboard/PendingAssignmentsPage" className={linkClass}>
          <FaClock className="text-pink-500" />
          <span>PendingAssignmentsPage</span>
        </NavLink>
      </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

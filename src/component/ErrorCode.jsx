import React from 'react';
import { NavLink } from 'react-router';
import Navbar from './Navbar';

const ErrorCode = () => {
    return (
        <>
    <div>
        <Navbar></Navbar>
    </div>
    <div>
      <div className="card bg-base-100 shadow-sm justify-center items-center mx-auto py-20 px-20">
        <figure className=" pt-10 py-20 px-20">
          <img
            src="https://i.ibb.co.com/k2r9JJDs/8030430-3828537.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="">
          <h1 className="text-5xl font-bold text-red-500">
            404 - Page Not Found
          </h1>
          <p className="text-3xl pt-5 pb-5 font-bold">page loading .......</p>
          <NavLink to="/">
            <button className="btn hover:bg-blue-500 pt-5 pb-5 rounded-2xl w-full">
              return to home page
            </button>
          </NavLink>
        </div>
      </div>
    </div>
    </>
    );
};

export default ErrorCode;
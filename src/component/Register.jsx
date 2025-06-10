import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { updateProfile } from "firebase/auth";

const Register = () => {
const [name, setUsername] = useState("");
const [photo, setImageUrl] = useState("");

  const { createUser ,handleLogOut,googleSignIn} = use(AuthContext);
  const handleGoogleSignIn = () => {
      googleSignIn()
        .then((result) => {
          console.log(result);
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
            title: "Google login successfully",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { confirmPassword, email, password, ...restFormData } =
      Object.fromEntries(formData.entries());

    if (password.length < 6) {
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
        icon: "error",
        title: "passWord must be euqal or greater then 6",
      });
      return;
    }

    if (!/[a-z]/.test(password)) {
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
        icon: "error",
        title: "password must be contain lest one lower case letter",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
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
        icon: "error",
        title: "password must be contain lest one upper case letter",
      });
      return;
    }
    if (password !== confirmPassword) {
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
        icon: "error",
        title: "password and confirm Password must be same",
      });
      return;
    }

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // const user = result.user;
        updateProfile(result.user, { displayName: name, photoURL: photo });
        console.log(photo, name);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // save profile info in the db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              handleLogOut()
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
                title: "register successfully",
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
    return (
        <div className="flex flex-col  max-w-md p-6 rounded-md mx-auto mt-[100px] sm:p-10 bg-gray-100 text-black">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm text-black">Register to access your account</p>
      </div>
      <form onSubmit={handleRegister} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="fullname"
              name="fullname"
              id="fullname"
              placeholder="fullname"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-black"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="photoURL" className="text-sm">
                Photo URL
              </label>
            </div>
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="photoURL"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-black"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-black"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="confirmPassword" className="text-sm">
                confirm Password
              </label>
            </div>
            <input
              type="confirmPassword"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="confirmPassword"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-black"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              onClick={() => navigate("/")}
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              Register
            </button>
          </div>
          <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <h1 onClick={handleGoogleSignIn}>Login with Google</h1>
          </button>
        </div>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
            </svg>
            <h1>Login with GitHub</h1>
          </button>
        </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <NavLink
              to="/login"
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-red-600"
            >
              Log In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
    );
};

export default Register;
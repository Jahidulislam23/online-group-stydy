import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import registerLottis from "../assets/lottis/register.json";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { createUser, handleLogOut, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const toast = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (t) => {
        t.onmouseenter = Swal.stopTimer;
        t.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({ icon, title });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log("google result:", result);
      toast("success", "Google login successful");
      // optionally navigate after success
      // navigate('/');
    } catch (error) {
      console.error(error);
      toast("error", "Google login failed");
    }
  };

  const uploadImageToImgbb = async (file) => {
    // replace with your own key
    // const IMGBB_KEY = '';
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_images_upload_key
      }`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    if (!data.success) {
      throw new Error("Image upload failed");
    }
    return data.data.display_url; // or data.data.url
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = e.target;
      const formData = new FormData(form);

      const email = formData.get("email")?.trim();
      const password = formData.get("password") || "";
      const confirmPassword = formData.get("confirmPassword") || "";
      const fullNameFromForm = formData.get("fullname") || fullname;

      // validations
      if (password.length < 6) {
        toast("error", "Password must be at least 6 characters");
        setLoading(false);
        return;
      }
      if (!/[a-z]/.test(password)) {
        toast("error", "Password must contain at least one lowercase letter");
        setLoading(false);
        return;
      }
      if (!/[A-Z]/.test(password)) {
        toast("error", "Password must contain at least one uppercase letter");
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        toast("error", "Password and Confirm Password must match");
        setLoading(false);
        return;
      }
      if (!photoFile) {
        toast("error", "Please select a photo to upload");
        setLoading(false);
        return;
      }

      // 1) upload image to imgbb
      const imageUrl = await uploadImageToImgbb(photoFile);

      // 2) create firebase user
      const result = await createUser(email, password);
      // 3) update profile with name + photoURL
      await updateProfile(result.user, {
        displayName: fullNameFromForm,
        photoURL: imageUrl,
      });

      // 4) prepare profile payload and save to backend
      const userProfile = {
        email,
        fullname: fullNameFromForm,
        photoURL: imageUrl,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      const saveRes = await fetch(
        "https://assignment-11-server-side-rosy.vercel.app/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        }
      );
      const saveData = await saveRes.json();

      if (saveData.insertedId) {
        // optionally log the user out to force email verification/login flow
        await handleLogOut();
        toast("success", "Registered successfully. Please login.");
        form.reset();
        navigate("/login"); // navigate to login
      } else {
        // If backend didn't return insertedId, still show success for firebase creation
        toast("success", "Registered (but failed to save profile on server)");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      toast("error", err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "450px" }}
            animationData={registerLottis}
            loop={true}
          />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Register now!</h1>

            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label htmlFor="fullname" className="block mb-2 text-sm">
                  Full Name
                </label>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full name"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="photo" className="block mb-2 text-sm">
                  Photo (upload)
                </label>
                <input
                  onChange={(e) => setPhotoFile(e.target.files[0] || null)}
                  type="file"
                  name="photo"
                  id="photo"
                  accept="image/*"
                  className="w-full px-3 py-2 border rounded-md text-black"
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
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full px-3 py-2 border rounded-md text-black"
                  required
                />
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white"
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                <div className="flex items-center w-full my-4">
                  <hr className="w-full" />
                  <p className="px-3">OR</p>
                  <hr className="w-full" />
                </div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full p-3 space-x-3 border rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <span>Continue with Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => toast("info", "GitHub login not implemented")}
                  className="flex items-center justify-center w-full p-3 space-x-3 border rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6 9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                  </svg>
                  <span>Continue with GitHub</span>
                </button>

                <p className="px-6 text-sm text-center">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="text-indigo-600 hover:underline"
                  >
                    Log In
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

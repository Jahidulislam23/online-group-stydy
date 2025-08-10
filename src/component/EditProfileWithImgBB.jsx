import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const EditProfileWithImgBB = () => {
  const { user, auth } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", imageFile);

    fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_images_upload_key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPhotoURL(data.data.url);
          Swal.fire("Success", "Image uploaded!", "success");
        } else {
          Swal.fire("Error", "Image upload failed", "error");
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Image upload failed", "error");
      })
      .finally(() => setUploading(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      Swal.fire("Error", "Name cannot be empty", "error");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire("Success", "Profile updated successfully", "success");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1">Profile Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={uploading}
          />
          {uploading && <p>Uploading image...</p>}
          {photoURL && (
            <img
              src={photoURL}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mt-2 object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfileWithImgBB;

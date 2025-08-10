import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const { _id, photo, title, description } = useLoaderData();
  const navigate = useNavigate();
  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateAssignment = Object.fromEntries(formData.entries());
    console.log(updateAssignment);

    // send update the assignment
    fetch(
      `https://assignment-11-server-side-rosy.vercel.app/assignment/${_id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateAssignment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
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
            title: "Assignment update successfully",
          });
          navigate("/dashboard/dashboard/assignments");
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-5xl font-bold">Update Assignment</h1>
      </div>
      <form onSubmit={handleUpdateAssignment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              // value={title}
              defaultValue={title}
              className="input w-full"
              placeholder="title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              // value={description}
              defaultValue={description}
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
          <label className="label">Photo</label>
          <input
            type="photo"
            name="photo"
            // value={photo}
            defaultValue={photo}
            className="input w-full"
            placeholder="photo"
          />
        </fieldset>
        <button className="w-full">
          <input
            className="btn w-full"
            type="submit"
            value="update assignment"
          />
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;

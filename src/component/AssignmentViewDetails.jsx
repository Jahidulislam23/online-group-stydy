import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

const AssignmentViewDetails = () => {
    const { user } = use(AuthContext);
          const { email,name } = useLoaderData();
      
  const handleUpdateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateAssignment = Object.fromEntries(formData.entries());
    console.log(updateAssignment);

    // send viewAssignmentDetails
    fetch(`http://localhost:3000/assignment/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAssignment),
    })
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
            title: "Assignment View Details successfully",
          });
        }
      });
  };
  const navigate = useNavigate();
    return (
        <div>
              <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-5xl font-bold">View Assignment Details Page</h1>
      </div>
      <form onSubmit={handleUpdateAssignment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              
              className="input w-full"
              placeholder="title"
            />
          </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">User Emai</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input w-full"
              placeholder="User Emai"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="description"
              defaultValue={user?.name}
              className="input w-full"
              placeholder="Description"
              required
            />
          </fieldset>
        </div>
        <button onClick={() => navigate("/Assignments")} className='w-full'><input className="btn w-full" type="submit" value=" submitted assignment" /></button>
      </form>
    </div>
        </div>
    );
};

export default AssignmentViewDetails;
import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import DatePicker from 'react-datepicker';

const CreateAssignments = () => {
      const { user } = use(AuthContext);

  const [startDateTime, setStartDateTime] = useState(new Date());
  const [careLevel, setCareLevel] = useState();
  const handleAddTree = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTree = Object.fromEntries(formData.entries());
    console.log(newTree);
    // newTree.startDate = startDate;
    newTree.startDateTime = startDateTime;
    
    newTree.careLevel = careLevel;
    // send assignment data to the db
    fetch("http://localhost:3000/assignment", {
      method: "POST",
      credentials:'include',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTree),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added the successfully. ");
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
            title: "Added the successfully",
          });
        }
      });
  };
    return (
        <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-5xl font-bold">Add Assignment</h1>
      </div>
      <form onSubmit={handleAddTree}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="title"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">assignment difficulty level</label>
            <select
              onChange={(e) => setCareLevel(e.target.value)}
              value={careLevel}
              className="input input-bordered w-full"
              selected={setCareLevel}
              name="marks"
              id="marks"
              required
            >
              <option value=""></option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </fieldset>
          {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Watering Frequency</label>
            <input
              type="text"
              name="watering"
              className="input w-full"
              placeholder="Watering Frequency"
            />
          </fieldset> */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Marks</label>
            <input
              type="text"
              name="marks"
              className="input w-full"
              placeholder="Marks"
              required
            />
          </fieldset>
          
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">due date</label>
            <DatePicker
              className="w-full fieldset bg-base-200 border-base-300 rounded-box  border p-2"
              selected={startDateTime}
              onChange={(date) => setStartDateTime(date)}
              required
            ></DatePicker>
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
            <label className="label">User Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="User Name"
              required
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
          <label className="label"> thumbnail Image URL</label>
          <input
            type="photo"
            name="photo"
            className="input w-full"
            placeholder="photo"
            required
          />
        </fieldset>
        <input className="btn w-full" type="submit" value="Add Tree" />
      </form>
    </div>
    );
};

export default CreateAssignments;
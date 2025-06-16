import React, { use, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreateAssignments = () => {
  const { user } = use(AuthContext);

  const [startDateTime, setStartDateTime] = useState(new Date());
  const [careLevel, setCareLevel] = useState();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 30) {
      Swal.fire({
        icon: "warning",
        title: "Character limit exceeded!",
        text: "You can write up to 20-30 characters only.",
      });
      return;
    }
    setDescription(value);
  };
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTree = Object.fromEntries(formData.entries());
    console.log(newTree);
    // newTree.startDate = startDate;
    newTree.startDateTime = startDateTime;

    newTree.careLevel = careLevel;
    console.log(newTree);
    // send assignment data to the db
    fetch("https://assignment-11-server-side-rosy.vercel.app/assignment", {
      method: "POST",
      credentials: "include",
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
    if (!title) {
      Swal.fire({
        icon: "warning",
        title: "Character limit exceeded!",
        text: "title fieldset must be kora lagbe.",
      });
      return;
    }
    console.log("Title submitted:", title);
    setTitle("");
    if (!marks) {
      Swal.fire({
        icon: "warning",
        title: "Character limit exceeded!",
        text: "marks fieldset must be kora lagbe.",
      });
      return;
    }
    console.log("Title submitted:", marks);
    setMarks("");
  };
  return (
    <div className="p-24">
      <div className="p-12 text-center">
        <h1 className="text-5xl font-bold">Add Assignment</h1>
      </div>
      <form onSubmit={handleAddAssignment}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
              onChange={handleChange}
              value={description}
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">assignment difficulty level</label>
            <select
              onChange={(e) => setCareLevel(e.target.value)}
              className="input input-bordered w-full"
              selected={setCareLevel}
              name="marks"
              id="marks"
              value={careLevel}
              required
            >
              <option value=""></option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Marks</label>
            <input
              type="text"
              name="marks"
              className="input w-full"
              placeholder="Marks"
              required
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
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
        <input className="btn w-full" type="submit" value="Add Assignment" />
      </form>
    </div>
  );
};

export default CreateAssignments;

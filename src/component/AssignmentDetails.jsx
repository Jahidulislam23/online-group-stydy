import React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  // const [careLevel, setCareLevel] = useState();
  const handleAddAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newAssignment = Object.fromEntries(formData.entries());
    console.log(newAssignment);
    newAssignment.careLevel = "pending";
    // send assignment data to the db
    fetch("http://localhost:3000/assignmentModal", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAssignment),
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
    <div>
      <div className="pt-9">
        <div className="card bg-base-100 mx-auto justify-center w-96 shadow-sm ">
          <figure>
            <img src={assignment.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2>plan name:{assignment.title}</h2>
            <h3>description:{assignment.description}</h3>
            <div>
              <h3>email:{assignment.email}</h3>
            </div>
            {/* <NavLink to="assignmentViewDetails">
              <button className="btn btn-primary">Take assignment</button>
            </NavLink> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn hover:bg-blue-400"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Take assignment
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form onSubmit={handleAddAssignment}>
                    <div className=" w-full gap-6"></div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border  my-6 w-full">
                      <label className="label"> GoogleDocsLink</label>
                      <input
                        type="url"
                        name="Google_Docs_link"
                        className="input w-full"
                        placeholder=" Google Docs link"
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
                    {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border ">
                      <label className="label">
                        assignment pending status level
                      </label>
                      <select
                        onChange={(e) => setCareLevel(e.target.value)}
                        value={careLevel}
                        className="input input-bordered w-full"
                        selected={setCareLevel}
                        name="pending status"
                        id="pending status"
                        required
                      >
                        <option value=""></option>
                        <option value="pending status">pending status</option>
                      </select>
                    </fieldset> */}
                    <h3 className="w-full">email:{assignment.email}</h3>
                    <button
                      onClick={() => navigate("/Assignments")}
                      className="btn hover:bg-blue-400"
                    >
                      Submit assignment
                    </button>
                  </form>

                <div className="modal-action">
                  
                  <form method="dialog">
                    <button className="btn hover:bg-blue-400">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button
              onClick={() => navigate("/Assignments")}
              className="btn hover:bg-blue-400"
            >
              assignment page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;

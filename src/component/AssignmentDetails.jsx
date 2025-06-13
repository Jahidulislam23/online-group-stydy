import React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-9">
        <div className="card bg-base-100 mx-auto justify-center w-96 shadow-sm ">
          {/* <figure>
            <img src={assignment.photo} alt="Shoes" />
          </figure> */}
          <div className="card-body">
            
            <div>
              
            </div>
            {/* <NavLink to="assignmentViewDetails">
              <button className="btn btn-primary">Take assignment</button>
            </NavLink> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Take assignment
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h2>plan name:{assignment.title}</h2>
            <h3>description:{assignment.description}</h3>
            <h3>email:{assignment.email}</h3>
            
                <div className="modal-action">
                  <form method="dialog my-4">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn hover:bg-blue-400">Close</button>
                    
                    <button className="btn hover:bg-blue-400">Submit assignment</button>
                  </form>
                </div>
              </div>
            </dialog>
            <button onClick={() => navigate("/Assignments")} className="btn hover:bg-blue-400">assignment page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;

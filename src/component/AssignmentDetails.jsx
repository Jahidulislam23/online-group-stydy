import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';

const AssignmentDetails = () => {
    const assignment  = useLoaderData()
    const navigate = useNavigate();
    return (
        <div>
            <div className="pt-9">
        <div className="card bg-base-100 mx-auto justify-center w-96 shadow-sm ">
          <figure>
            <img
              src={assignment.photo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2>plan name:{assignment.title}</h2>
            
            <h3>
              description:{assignment.description}
            </h3>
            <div>
            <h3>email:{assignment.email}</h3>
            </div>
            <NavLink to='assignmentViewDetails'>
              <button className='btn btn-primary'>Take assignment</button>
            </NavLink>
        <button onClick={() => navigate("/Assignments")} className='btn btn-secondary'>assignment page</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AssignmentDetails;
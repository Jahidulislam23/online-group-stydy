import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Assignments = () => {
  const data = useLoaderData();
  const [plant, setPlant] = useState(data);
  //   const {_id,title,description,photo} = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the tree
        fetch(`http://localhost:3000/assignment/${_id}`, {
          method: "DELETE",

//   credentials: "include", 
// })
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your my assignment has been deleted.",
                icon: "success",
              });
              // remove the data
              const remainingTree = plant.filter((trees) => trees._id !== _id);
              console.log(remainingTree);
              setPlant(remainingTree);
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {plant?.map((data) => (
        <div key={data._id} className="py-10">
          <div className="card bg-base-100  shadow-sm justify-center mx-auto">
            <figure>
              <img src={data?.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data?.title}</h2>
              <p>{data?.description}</p>
              <div className="card-actions ">
                <Link to={`/update/${data?._id}`}>
                  <button className="btn hover:bg-blue-500">
                    Edit
                  </button>
                </Link>
                
                <Link to={`/assignmentDetails/${data?._id}`}>
                  <button className="btn  hover:bg-blue-500">
                    View Details btn
                  </button>
                </Link>
                <Link to={`/assignmentDetails/${data?._id}`}>
                  <button className="btn  hover:bg-blue-500">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(data?._id)}
                  className="btn hover:bg-blue-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Assignments;

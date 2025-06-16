import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Assignments = () => {
  const data = useLoaderData();
  console.log(data);
  const [plant, setPlant] = useState(data);
  const [select, setSelect] = useState("");
  const { user } = use(AuthContext);
  // const {email} = data;
  //   console.log(email)
  const handleDelete = (_id) => {
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
        fetch(
          `https://assignment-11-server-side-rosy.vercel.app/assignment/${_id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        )
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
      if (user?.email === data?.email) {
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
          title: "tomer email tomi kaj korte parba na",
        });
      }
    });
  };
  const handleNoDelete = () => {
    if (user?.email !== data?.email) {
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
        title: "tomer email tomi sara delete korte parba na",
      });
    }
  };
  const handleFilter = (event) => {
    setSelect(event.target.value);
    fetch(
      `https://assignment-11-server-side-rosy.vercel.app/assignment?filterType=${event.target.value}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlant(data);
      });
  };
  const handleGiveMarkEdit = () => {
    if (user?.email === data?.email) {
      console.log(data?.email);
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
        title: "ai email tomi kaj korte parba ",
      });
    }
  };
  const handleNoGiveMarkEdit = () => {
    if (user?.email !== data?.email) {
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
        title: "tomer email tomi kaj korte parba na",
      });
    }
  };
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Filter</legend>
        <select onChange={handleFilter} value={select} className="select">
          <option>Filter Data</option>
          <option>easy</option>
          <option> medium</option>
          <option>hard</option>
        </select>
      </fieldset>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plant?.map((data) => (
          <div key={data._id} className="py-10">
            <div className="card bg-base-100  shadow-sm justify-center mx-auto">
              <figure>
                <img src={data?.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Title: {data?.title}</h2>
                <p>Description: {data?.description}</p>
                <p>Marks: {data?.marks}</p>
                <div className="card-actions ">
                  {user?.email === data?.email ? (
                    <Link to={`/update/${data?._id}`}>
                      <button
                        onClick={handleGiveMarkEdit}
                        className="btn hover:bg-blue-500"
                      >
                        Edit
                      </button>
                    </Link>
                  ) : (
                    <button onClick={handleNoGiveMarkEdit} className="btn">
                      Edit
                    </button>
                  )}

                  <Link to={`/assignmentDetails/${data?._id}`}>
                    <button className="btn  hover:bg-blue-500">
                      View Details
                    </button>
                  </Link>
                  {user?.email === data?.email ? (
                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="btn hover:bg-blue-500"
                    >
                      Delete
                    </button>
                  ) : (
                    <button onClick={handleNoDelete} className="btn">
                      delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Assignments;

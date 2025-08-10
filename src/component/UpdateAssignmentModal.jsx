import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateAssignmentModal = () => {
  const { Google_Docs_link } = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateAssignment = Object.fromEntries(formData.entries());
    updateAssignment.careLevel = "completed";

    // send update the assignment
    fetch(`http://localhost:3000/assignmentModal/${id}`, {
      method: "PUT",
      credentials: "include",
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
            title: "Assignment pending teke compeletedd successfully",
          });
          navigate("/dashboard/dashboard/PendingAssignmentsPage");
        }
      });
  };
  return (
    <div className="p-24 ">
      <div className="bg-base-100">
        <form onSubmit={handleGiveMark} className="gap-6 ">
          <div className="gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-3">
              <p className="w-full ">
                Google Doc:
                <a href={Google_Docs_link} target="_blank">
                  Google_Docs_link
                </a>
              </p>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-3">
              <label className="label">Feedback</label>
              <input
                type="text"
                name="feedback"
                className="input w-full"
                placeholder="feedback"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-3">
              <label className="label">Marks</label>
              <input
                type="text"
                name="marks"
                className="input w-full"
                placeholder="Marks"
                required
              />
            </fieldset>

            <button
              onClick={() => navigate("/dashboard/dashboard/PendingAssignmentsPage")}
              className="btn hover:bg-green-400 pt-2 my-3"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignmentModal;

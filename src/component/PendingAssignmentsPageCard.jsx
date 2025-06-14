
import React from "react";
import { Link,} from "react-router";
import Swal from "sweetalert2";

const PendingAssignmentsPageCard = ({ card }) => {
    // const navigate = useNavigate();
  const { Google_Docs_link, description, careLevel,_id ,feedback,marks} = card;
  // const handleGiveMark = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const newTree = Object.fromEntries(formData.entries());
  //   console.log(newTree);
  //   newTree.careLevel = "completed"

  //   fetch('http://localhost:3000/assignmentModal', {
  //         method: "POST",
  //         credentials:'include',
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(newTree),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.insertedId) {
  //             console.log("added the successfully. ");
  //             const Toast = Swal.mixin({
  //               toast: true,
  //               position: "top-end",
  //               showConfirmButton: false,
  //               timer: 3000,
  //               timerProgressBar: true,
  //               didOpen: (toast) => {
  //                 toast.onmouseenter = Swal.stopTimer;
  //                 toast.onmouseleave = Swal.resumeTimer;
  //               },
  //             });
  //             Toast.fire({
  //               icon: "success",
  //               title: "Added the modal successfully",
  //             });
              
  //           }
  //         });
      
  // };
  
  return (
    <div className="py-3">
      <div className="card  bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <p className="w-full ">
                  Google Doc:
                  <a href={Google_Docs_link} target="_blank">
                    Google_Docs_link
                  </a>
                </p>
          <p>{description}</p>
          <h2>{careLevel}</h2>
          <h2>{feedback}</h2>
          <h2>{marks}</h2>
          {/* <div className="justify-end card-actions mr-3">
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-primary">Count Number</button>
          </div> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <Link to={`/updateModal/${_id}`}>
          <button
            className="btn w-full hover:bg-red-300"
            // onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            give mark
          </button>
          </Link>
          {/* <dialog id="my_modal_4" className="modal">
            <div className="modal-box gap-5 max-w-5xl">
              <form onSubmit={handleGiveMark} >
                
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4"><p className="w-full ">
                  Google Doc:
                  <a href={Google_Docs_link} target="_blank">
                    Google_Docs_link
                  </a>
                </p></fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                  <label className="label">description</label>
                  <input
                    type="text"
                    name="description"
                    className="input w-full"
                    placeholder="description"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                  <label className="label">Feedback</label>
                  <input
                    type="text"
                    name="feedback"
                    className="input w-full"
                    placeholder="feedback"
                    required
                  />
                </fieldset>
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
                
                <button onClick={() => navigate("/PendingAssignmentsPage")} className="btn mr-3 pt-2" type="submit">Submit</button> 
              </form>
              <div className="modal-action">
                <form method="dialog"><button className="btn pt-2">Close</button></form>
              </div>
            </div>
          </dialog> */}
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentsPageCard;

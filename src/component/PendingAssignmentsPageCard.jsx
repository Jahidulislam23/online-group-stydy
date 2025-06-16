
import React, { use } from "react";
import { Link,} from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const PendingAssignmentsPageCard = ({ card }) => {
  const {user} = use(AuthContext);
    // const navigate = useNavigate();
  const { Google_Docs_link, description, careLevel,_id ,feedback,marks ,email} = card;
  const handleGiveMark = () => {
    
    if(user?.email ===email) {
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
      // return alert('tomer email')
    
    
  };
  const handleNoGiveMark =()=>{
    if(user?.email === email){
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
  }
  
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
          {
            user?.email !==email ? <Link to={`/updateModal/${_id}`}>

          <button onClick={handleGiveMark}
            className="btn w-full hover:bg-green-500"
          >
            give mark
          </button>
          </Link>:
          <button onClick={handleNoGiveMark} className="btn w-full hover:bg-red-500"> give mark</button>
          }
          
        </div>
      </div>
    </div>
  );
};

export default PendingAssignmentsPageCard;

import React from "react";
import { useLoaderData } from "react-router";
import PendingAssignmentsPageCard from "./PendingAssignmentsPageCard";

const Pendingassignmentspage = () => {
    
  const data = useLoaderData();
//   console.log(data);
  return (
    <div className="pt-5">
        {
            data.map(card=><PendingAssignmentsPageCard key={card._id} card={card}></PendingAssignmentsPageCard>)
        }
      {/* <h2>{data.Google_Docs_link} </h2>
      <h2>{data.description} </h2>
      <h2>{data.careLevel} </h2> */}
      
    </div>
  );
};

export default Pendingassignmentspage;

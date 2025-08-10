import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyAttemptedAssignmentsCard from "./MyAttemptedAssignmentsCard";

const MyAttemptedAssignments = () => {
  const { user } = use(AuthContext);
  const [plant, setPlant] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-side-rosy.vercel.app/assignments/${user?.email}`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPlant(data);
      });
  }, [user?.email]);
  return (
    <div className="gap-6 space-y-6 py-10">
      {plant.map((plants) => (
        <MyAttemptedAssignmentsCard
          key={plants._id}
          plants={plants}
        ></MyAttemptedAssignmentsCard>
      ))}
    </div>
  );
};

export default MyAttemptedAssignments;

import React from 'react';

const MyAttemptedAssignmentsCard = ({plants}) => {
    const {_id,title,description,photo} = plants;
    return (
        <div>
          
          <div  className="card card-side bg-base-100 shadow-sm border-2 ">
        <figure>
          <img className="w-40 h-40 " src={photo} alt="Movie" />
        </figure>
        <div className="flex mt-8 w-full justify-around">
          <div>
            <h2 className="">Name: {title}</h2>
            <p>description: {description}</p>
            
          </div>
        </div>
        
      </div>
          
        </div>
    );
};

export default MyAttemptedAssignmentsCard;
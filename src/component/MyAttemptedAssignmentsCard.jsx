import React from 'react';

const MyAttemptedAssignmentsCard = ({plants}) => {
    const {_id,title,name,description,photo,marks,email,startDateTime,careLevel} = plants;
    return (
        <div>
          
          <div  className="card card-side bg-base-100 shadow-sm border-2 ">
        <figure>
          <img className="w-40 h-40 " src={photo} alt="Movie" />
        </figure>
        <div className="flex mt-8 w-full justify-around">
          <div>
            <h2 className="">Name: {name}</h2>
            <h2>email : {email}</h2>
            <h2>Title:{title}</h2>
            <h2>description: {description}</h2>
            <h2>marks:{marks}</h2>
            <h2>startDateTime :{startDateTime}</h2>
            <p>careLevel:{careLevel}</p>
          </div>
        </div>
        
      </div>
          
        </div>
    );
};

export default MyAttemptedAssignmentsCard;
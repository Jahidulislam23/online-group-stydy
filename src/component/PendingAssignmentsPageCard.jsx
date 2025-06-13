import React from 'react';
import { Link } from 'react-router';

const PendingAssignmentsPageCard = ({card}) => {
    const {Google_Docs_link,description,careLevel} = card;
    return (
        <div className='py-3'>
            <div className="card  bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <Link><h2 className="card-title">{Google_Docs_link}</h2></Link>
          <p>
            {description}
          </p>
          <h2>{careLevel}</h2>
          <div className="justify-end card-actions mr-3">
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-primary">Count Number</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PendingAssignmentsPageCard;
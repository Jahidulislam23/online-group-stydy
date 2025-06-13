import React from 'react';
import { Link } from 'react-router';

const BannerSection = ({ card }) => {
    const {_id,title,photo,description,careLevel} = card;
    return (
        <div>
            <div className="card bg-linear-to-r from-cyan-300 to-blue-300 w-96 shadow-sm">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}
          </p>
          <p>
            {careLevel}
          </p>
          
          {/* <div className="card-actions w-full">
            <Link to={`/assignments/${_id}`}><button className="btn bg-linear-to-bl from-violet-300 to-fuchsia-300 w-full text-white">View Details</button></Link>
          </div> */}
        </div>
      </div>
        </div>
    );
};

export default BannerSection;
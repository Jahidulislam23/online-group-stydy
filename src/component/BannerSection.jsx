import React from 'react';
import { Link } from 'react-router';

const BannerSection = ({ card }) => {
    const {_id,title,photo,description,careLevel} = card;
    return (
        <div>
            <div className="card bg-linear-to-r from-cyan-300 to-blue-300 shadow-sm sm:pr-3">
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
        </div>
      </div>
        </div>
    );
};

export default BannerSection;
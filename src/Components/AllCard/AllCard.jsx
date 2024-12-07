import React from 'react';
import { Link } from 'react-router-dom';

const AllCard = ({fund}) => {
    const { title, description, _id, thumbnail } = fund;
    return (
        <>
            <div className="">
        <div className="card bg-base-100 w-96 h-96 mx-auto mb-10 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={thumbnail} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions mt-5">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-primary">See More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default AllCard;
// CarListing.js

import React from 'react';
import { cars } from '../components/carListingData';


const CarListing = () => {
  return (
    <div className="card-container">
      <h1 className="text-center my-4">Welcome to Cool Cars!</h1>
      <div className="row">
        {cars.map((car) => (
          <div className="col-lg-3 col-md-6 mb-4" key={car.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{`${car.make} ${car.model}`}</h5>
                <p className="card-text">Year: {car.year}</p>
                <p className="card-text">Price: {car.price}</p>
              </div>
              <div className="card-image-container">
                <div className="card-image-overlay"></div>
                <img
                  src={car.img}
                  className="card-img-top"
                  alt={car.make + ' ' + car.model}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListing;

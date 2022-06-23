import React from "react";

const FoodCard = ({ name, image_url }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img">
          <img src={image_url} alt={name} />
        </div>
      </div>
      <div className="card-title">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default FoodCard;

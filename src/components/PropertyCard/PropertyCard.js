import React from "react";
import "./PropertyCard.css";
import {
  MdOutlineFavoriteBorder,
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdCropLandscape,
} from "react-icons/md";

export const PropertyCard = () => {
  return (
    <div className="property-card">
      <div className="property-card-header">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="property-card-body">
        <div className="property-info-container">
          <div className="">
            <p className="property-price">
              $2,095<span> /month</span>
            </p>
            <h3 className="property-title">Palm Harbor</h3>
          </div>
          <button className="favorite-icon-btn">
            <MdOutlineFavoriteBorder className="favorite-icon" />
          </button>
        </div>
        <p className="property-address">2699 Green Valley, Highland Lake, FL</p>
      </div>
      <div className="horizontal-divider"></div>
      <div className="property-card-footer">
        <div className="card-text-with-icon">
          <MdOutlineKingBed className="md-icon" />
          <p>3 Beds</p>
        </div>
        <div className="card-text-with-icon">
          <MdOutlineBathtub className="md-icon" />
          <p>2 Bathrooms</p>
        </div>
        <div className="card-text-with-icon">
          <MdCropLandscape className="md-icon" />
          <p>
            6*7.5{" "}
            <span>
              m<sup>2</sup>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

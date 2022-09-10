import React from "react";
import "./PropertyCard.css";
import {
  MdOutlineFavoriteBorder,
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdCropLandscape,
  MdOutlineFavorite,
} from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { putCommasInPrice } from "../../helpers";
import { usePropertyData } from "../../hooks/hooks";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../../reducers/actions";

export const PropertyCard = ({ property }) => {
  const { name, image, price, street, beds, bathrooms, area } = property;
  const {
    state: { favoritesProperty },
    dispatch,
  } = usePropertyData();

  const isPropertyAlreadyInFavorites = favoritesProperty?.find(
    p => p.id === property.id
  );

  const removeFromFavorites = () => {
    const filteredProperties = favoritesProperty.filter(
      p => p.id !== property.id
    );
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: filteredProperties });
  };

  return (
    <div className="property-card">
      <div className="property-card-header">
        <img src={image} alt={name} />
      </div>
      <div className="property-card-body">
        <div className="property-info-container">
          <div className="">
            <p className="property-price">
              ${putCommasInPrice(price)}
              <span> /month</span>
            </p>
            <h3 className="property-title">{name}</h3>
          </div>
          {isPropertyAlreadyInFavorites ? (
            <button className="favorite-icon-btn" onClick={removeFromFavorites}>
              <MdOutlineFavorite className="favorite-icon active" />
            </button>
          ) : (
            <button
              className="favorite-icon-btn"
              onClick={() =>
                dispatch({ type: ADD_TO_FAVORITES, payload: property })
              }
            >
              <MdOutlineFavoriteBorder className="favorite-icon" />
            </button>
          )}
        </div>
        <p className="property-address">{street}</p>
      </div>
      <div className="horizontal-divider"></div>
      <div className="property-card-footer">
        <div className="card-text-with-icon">
          <MdOutlineKingBed className="md-icon" />
          <p>{beds} Beds</p>
        </div>
        <div className="card-text-with-icon">
          <MdOutlineBathtub className="md-icon" />
          <p>{bathrooms} Bathrooms</p>
        </div>
        <div className="card-text-with-icon">
          <MdCropLandscape className="md-icon" />
          <p>
            {area}{" "}
            <span>
              ft<sup>2</sup>
            </span>
          </p>
        </div>
      </div>
      {property.isPopular && (
        <>
          <div className="badge-square"></div>
          <div className="badge-card">
            {" "}
            <HiSparkles className="spark-icon" /> POPULAR
          </div>
        </>
      )}
    </div>
  );
};

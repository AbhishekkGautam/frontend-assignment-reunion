import React from "react";
import { NavWrapper, PropertyList } from "../../components";
import { usePropertyData } from "../../hooks/hooks";
import "./Favorites.css";

export const Favorites = () => {
  const {
    state: { favoritesProperty },
  } = usePropertyData();

  return (
    <NavWrapper>
      <div className="container">
        <h1 className="favorite-title">Favorites</h1>
        {favoritesProperty.length === 0 ? (
          <div className="not-found">
            <p>Add properties that you would like to save for later.</p>
          </div>
        ) : (
          <PropertyList propertyData={favoritesProperty} />
        )}
      </div>
    </NavWrapper>
  );
};

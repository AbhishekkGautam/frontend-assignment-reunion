import React from "react";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import "./PropertyList.css";

export const PropertyList = () => {
  return (
    <div className="property-list-container">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
};

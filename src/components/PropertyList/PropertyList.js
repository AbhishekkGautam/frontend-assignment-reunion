import React from "react";
import { PropertyCard } from "../PropertyCard/PropertyCard";
import "./PropertyList.css";

export const PropertyList = ({ propertyData }) => {
  return (
    <div className="property-list-container">
      {propertyData?.map(property => {
        return (
          <div key={property.id}>
            <PropertyCard property={property} />;
          </div>
        );
      })}
    </div>
  );
};

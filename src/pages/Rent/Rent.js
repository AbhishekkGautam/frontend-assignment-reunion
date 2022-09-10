import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { NavWrapper, PropertyList, SearchWithFilters } from "../../components";
import { getFilteredProperties } from "../../helpers";
import { useFilter, usePropertyData } from "../../hooks/hooks";
import "./Rent.css";

export const Rent = () => {
  const {
    state: { propertyData, loading, error },
  } = usePropertyData();

  const { state } = useFilter();

  const filteredProperties = getFilteredProperties(propertyData, state);

  return (
    <NavWrapper>
      <div className="container">
        <SearchWithFilters />
        <div className="property-list-section">
          {loading ? (
            <ThreeDots
              color="#7065ee"
              height={80}
              width={80}
              className="loader"
            />
          ) : error ? (
            <p>{error.message}</p>
          ) : (
            <PropertyList propertyData={filteredProperties} />
          )}
        </div>
      </div>
    </NavWrapper>
  );
};

import React from "react";
import { NavWrapper, PropertyList, SearchWithFilters } from "../../components";
import { getFilteredProperties } from "../../helpers";
import { useFilter, usePropertyData } from "../../hooks/hooks";
import "./Rent.css";

export const Rent = () => {
  const {
    state: { propertyData },
  } = usePropertyData();

  const { state } = useFilter();

  const filteredProperties = getFilteredProperties(propertyData, state);

  return (
    <NavWrapper>
      <div className="container">
        <SearchWithFilters />
        {filteredProperties.length === 0 ? (
          <div className="not-found">
            <p>No property matches your search.</p>
          </div>
        ) : (
          <PropertyList propertyData={filteredProperties} />
        )}
      </div>
    </NavWrapper>
  );
};

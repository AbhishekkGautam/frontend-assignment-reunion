import React from "react";
import { NavWrapper, PropertyList, SearchWithFilters } from "../../components";
import "./Rent.css";

export const Rent = () => {
  return (
    <NavWrapper>
      <div className="container">
        <SearchWithFilters />
        <PropertyList />
      </div>
    </NavWrapper>
  );
};

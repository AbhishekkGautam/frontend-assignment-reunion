import React from "react";
import { NavWrapper, SearchWithFilters } from "../../components";
import "./Rent.css";

export const Rent = () => {
  return (
    <NavWrapper>
      <div className="container">
        <SearchWithFilters />
      </div>
    </NavWrapper>
  );
};

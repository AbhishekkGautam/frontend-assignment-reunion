import React from "react";
import "./SearchWithFilters.css";
import { MdOutlineSearch } from "react-icons/md";

export const SearchWithFilters = () => {
  return (
    <>
      <div className="search-top-bar">
        <h1 className="search-title">Search properties to rent</h1>
        <div className="search-form">
          <input
            type="search"
            placeholder="Search with Search bar"
            className="search-input"
          />
          <button className="search-btn">
            <MdOutlineSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-item">
          <label for="location">Location</label>
          <input
            id="location"
            type="text"
            value="New York, USA"
            className="filter-item-input"
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label for="move-in-date">When</label>
          <input type="date" id="move-in-date" value="2022-09-10" />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label>Price</label>
          <select name="" id="">
            <option value="$500-$2000">$500-$2000</option>
            <option value="$2000-$5000">$2000-$5000</option>
            <option value="$5000-$10000">$5000-$10000</option>
          </select>
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label for="property-type">Property Type</label>
          <select name="property" id="property-type">
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        </div>
        <div className="vertical-divider"></div>
        <button className="btn btn-primary btn-lg">Search</button>
      </div>
    </>
  );
};

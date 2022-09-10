import React, { useEffect, useState } from "react";
import "./SearchWithFilters.css";
import { MdOutlineSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useFilter, usePropertyData } from "../../hooks/hooks";
import {
  FILTER_BY_SEARCH_QUERY,
  FILTER_PROPERTY_DATA,
} from "../../reducers/actions";
import { getUniqueValues } from "../../helpers/helpers";

export const SearchWithFilters = () => {
  const { pathname } = useLocation();
  const { dispatch } = useFilter();
  const {
    state: { propertyData },
  } = usePropertyData();
  const [filterState, setFilterState] = useState({
    location: "All Location",
    checkInDate: "",
    priceRange: "All Price",
    propertyType: "All Property",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [uniquePropertyType, setUniquePropertyType] = useState([]);

  useEffect(() => {
    setUniquePropertyType(getUniqueValues(propertyData, "propertyType"));
  }, [propertyData]);

  useEffect(() => {
    dispatch({
      type: FILTER_PROPERTY_DATA,
      payload: {
        location: "All Location",
        checkInDate: "",
        priceRange: "All Price",
        propertyType: "All Property",
      },
    });
  }, [dispatch, pathname]);

  return (
    <>
      <div className="search-top-bar">
        <h1 className="search-title">Search properties to rent</h1>
        <div className="search-form">
          <input
            type="search"
            placeholder="Search with Search bar"
            className="search-input"
            value={searchQuery || ""}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              dispatch({ type: FILTER_BY_SEARCH_QUERY, payload: searchQuery });
              dispatch({
                type: FILTER_PROPERTY_DATA,
                payload: {
                  location: "All Location",
                  checkInDate: "",
                  priceRange: "All Price",
                  propertyType: "All Property",
                },
              });
            }}
          >
            <MdOutlineSearch className="search-icon" />
          </button>
        </div>
      </div>
      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={filterState.location}
            className="filter-item-input"
            onChange={e =>
              setFilterState({ ...filterState, location: e.target.value })
            }
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label htmlFor="move-in-date">When</label>
          <input
            type="date"
            id="move-in-date"
            min={new Date().toISOString().split("T")[0]}
            placeholder={
              filterState.checkInDate !== ""
                ? filterState.checkInDate
                : "Select Move-in Date"
            }
            value={filterState.checkInDate}
            onChange={e =>
              setFilterState({ ...filterState, checkInDate: e.target.value })
            }
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label htmlFor="price">Price</label>
          <select
            name="price"
            id="price"
            value={filterState.priceRange}
            onChange={e =>
              setFilterState({ ...filterState, priceRange: e.target.value })
            }
          >
            <option value="All Price">All Price</option>
            <option value="$500-$2000">$500-$2000</option>
            <option value="$2000-$5000">$2000-$5000</option>
            <option value="$5000-$10000">$5000-$10000</option>
          </select>
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-item">
          <label htmlFor="property-type">Property Type</label>
          <select
            name="property"
            id="property-type"
            value={filterState.propertyType}
            onChange={e =>
              setFilterState({ ...filterState, propertyType: e.target.value })
            }
          >
            <option value="All Property">All Property</option>
            {uniquePropertyType?.map((propertyType, id) => {
              return (
                <option value={propertyType} key={id}>
                  {propertyType}
                </option>
              );
            })}
          </select>
        </div>
        <div className="vertical-divider"></div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            dispatch({ type: FILTER_PROPERTY_DATA, payload: filterState });
            dispatch({ type: FILTER_BY_SEARCH_QUERY, payload: "" });
            setSearchQuery("");
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

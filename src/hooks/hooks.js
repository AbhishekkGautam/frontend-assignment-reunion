import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { PropertyDataContext } from "../context/PropertyDataContext";

export const usePropertyData = () => useContext(PropertyDataContext);
export const useFilter = () => useContext(FilterContext);

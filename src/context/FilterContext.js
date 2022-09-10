import { createContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const initialState = {
  searchQuery: "",
  location: "All Location",
  checkInDate: "",
  priceRange: "All Price",
  propertyType: "All Property",
};

const FilterContext = createContext(initialState);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, FilterContext };

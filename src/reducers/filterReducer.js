import { FILTER_PROPERTY_DATA, FILTER_BY_SEARCH_QUERY } from "./actions";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_BY_SEARCH_QUERY:
      return { ...state, searchQuery: payload };
    case FILTER_PROPERTY_DATA:
      return {
        ...state,
        location: payload.location,
        checkInDate: payload.checkInDate,
        priceRange: payload.priceRange,
        propertyType: payload.propertyType,
      };
    default:
      return state;
  }
};

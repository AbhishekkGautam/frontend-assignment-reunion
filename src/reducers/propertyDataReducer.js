import {
  LOADING,
  ERROR,
  GET_PROPERTY_DATA,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./actions";

export const propertyDataReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: payload };
    case GET_PROPERTY_DATA:
      return { ...state, loading: false, propertyData: payload };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesProperty: [...state.favoritesProperty, payload],
      };
    case REMOVE_FROM_FAVORITES:
      return { ...state, favoritesProperty: payload };
    default:
      return state;
  }
};

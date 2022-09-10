import { createContext, useReducer, useEffect } from "react";
import { propertyDataReducer } from "../reducers";
import { ERROR, GET_PROPERTY_DATA, LOADING } from "../reducers/actions";
import { getPropertyDataService } from "../services";

const initialState = {
  propertyData: [],
  loading: false,
  error: null,
  favoritesProperty: [],
};

const PropertyDataContext = createContext();

const PropertyDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(propertyDataReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOADING });
    (async () => {
      try {
        const { data, status } = await getPropertyDataService();
        if (status === 200) {
          dispatch({ type: GET_PROPERTY_DATA, payload: data });
        }
      } catch (error) {
        dispatch({ type: ERROR, payload: error });
      }
    })();
  }, []);

  return (
    <PropertyDataContext.Provider value={{ state, dispatch }}>
      {children}
    </PropertyDataContext.Provider>
  );
};

export { PropertyDataContext, PropertyDataProvider };

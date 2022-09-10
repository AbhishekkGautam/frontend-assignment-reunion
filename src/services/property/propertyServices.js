import axios from "axios";

export const getPropertyDataService = () =>
  axios.get("https://621efe11849220b1fca6c22a.mockapi.io/property");

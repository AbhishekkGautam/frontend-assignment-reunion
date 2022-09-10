import axios from "axios";

const API_URL = "https://621efe11849220b1fca6c22a.mockapi.io/property";

export const getPropertyDataService = () => axios.get(API_URL);

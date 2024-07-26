import axios from "axios";

const API_URL = 'http://localhost:8080/api';

  
  export const getAllVendors = async () => {
    const response = await axios.get(`${API_URL}/vendors/`);
    return response.data;
  };
  
  export const createVendor = (vendor) => axios.post(`${API_URL}/vendors/`, vendor);
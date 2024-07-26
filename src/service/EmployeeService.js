import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getAllEmployees = () => {
    return axios.get(`${API_URL}/employees/`);
  };

export const createEmployee = (employee) => axios.post(`${API_URL}/employees/`, employee);

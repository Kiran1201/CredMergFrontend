import axios from "axios";

const API_URL = 'http://localhost:8080/api';

export const sendEmailToVendors = (vendors) => axios.post(`${API_URL}/emails/send`, vendors);
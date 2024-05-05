import axios from "axios";
const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiURL = "https://jsonplaceholder.typicode.com";

const axiosClient = axios.create({
  baseURL: apiURL,
});

export default axiosClient;

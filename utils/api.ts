import axios from "axios";

// Create an Axios instance with a base URL
const baseURL = process.env.NEXT_PUBLIC_DJANGO_HOST_URL || 'https://back.novanestventure.com';

const apiClient = axios.create({
  baseURL: baseURL,
});

console.log("API Base URL:", baseURL);

// Add request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    const fullUrl = (config.baseURL || '') + (config.url || '');
    console.log('Making request to:', fullUrl);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
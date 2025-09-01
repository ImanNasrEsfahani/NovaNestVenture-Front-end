import axios from "axios";

// Create an Axios instance with a base URL
const baseURL = process.env.NEXT_PUBLIC_DJANGO_HOST_URL || 'https://back.novanestventure.com';

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: false, // Set to true if you need to send cookies
});

console.log("API Base URL:", baseURL);

// Add request interceptor for debugging
apiClient.interceptors.request.use(
  (config) => {
    const fullUrl = (config.baseURL || '') + (config.url || '');
    console.log('Making request to:', fullUrl);
    console.log('Request config:', {
      method: config.method,
      url: config.url,
      baseURL: config.baseURL,
      headers: config.headers,
    });
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
apiClient.interceptors.response.use(
  (response) => {
    console.log('Response received:', {
      status: response.status,
      statusText: response.statusText,
      url: response.config.url,
    });
    return response;
  },
  (error) => {
    console.error('Response error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      data: error.response?.data,
    });
    
    // Check for CORS or network issues
    if (!error.response) {
      console.error('Network error or CORS issue detected');
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
import axios from "axios";

const baseService = () => {
  const defaultOptions = {
    baseUrl: `http://localhost:3000/api/v1`,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    config.withCredentials = true;
    return config;
  }, (error) => {
    Promise.reject(error)
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return instance;
}

export default baseService;
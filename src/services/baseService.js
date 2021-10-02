import axios from "axios";

const baseService = () => {
  const defaultOptions = {
    baseUrl: `${process.env.REACT_APP_BASE_URL}/api/v1`,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return axios.create(defaultOptions);
}

export default baseService;
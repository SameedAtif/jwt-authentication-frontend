import axios from 'axios'
const BASE_URL = 'http://localhost:3000/api/v1'

export const signInUser = payload => {
  return axios.post(`${BASE_URL}/session`, payload)
}

export const signOutUser = payload => (
  axios.delete(`${BASE_URL}/session`, payload)
)

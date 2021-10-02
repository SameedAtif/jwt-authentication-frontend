import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1'
export const getUser = payload => (
  axios.get(`${BASE_URL}/users/${payload}`)
)

export const updateUser = payload => (
  axios.patch(`${BASE_URL}/users/${payload}`)
)

export const createUser = payload => {
  return axios.post(`${BASE_URL}/users`, payload)
}

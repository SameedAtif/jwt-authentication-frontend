import baseService from './baseService'

export const getUser = payload => (
  baseService.get(`/users/${payload}`)
)

export const updateUser = payload => (
  baseService.patch(`/users/${payload}`)
)

export const createUser = payload => {
  return baseService.post(`/users`, payload)
}

import * as baseService from './baseService'

export const getUser = payload => (
  baseService.get(`/user/${payload}`)
)

export const updateUser = payload => (
  baseService.patch(`/user/${payload}`)
)

export const createUser = payload => (
  baseService.post('/user', payload)
)

import baseService from './baseService'

export const signInUser = payload => (
  baseService.post('/session', payload)
)

export const signOutUser = payload => (
  baseService.delete('/session', payload)
)

export const createUser = payload => (
  baseService.patch('/session', payload)
)

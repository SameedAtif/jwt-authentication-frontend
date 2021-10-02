import * as baseService from './baseService'

export const signInUser = payload => (
  baseService.post('/session', payload)
)

export const signOutUser = payload => (
  baseService.destroy('/session', payload)
)

export const createUser = payload => (
  baseService.patch('/session', payload)
)

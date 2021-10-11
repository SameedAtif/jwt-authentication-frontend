import baseService from './baseService'

export const signInUser = payload => {
  return baseService.post("/session", payload)
}

export const signOutUser = payload => (
  baseService.delete("/session", payload)
)

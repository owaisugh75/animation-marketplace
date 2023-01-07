import { get } from 'lodash'

export const authStateSelector = (state) =>
  get(state, 'auth')

export const currentUserSelector = (state) =>
  get(state, 'auth.me', null)

export const authTokenSelector = (state) =>
  get(state, 'auth.token', null)

export const authStatusSelector = (state) =>
  get(state, 'auth.status', null)

export const authTotalStatusSelector = (state) =>
  get(state, 'auth.authStatus', null)

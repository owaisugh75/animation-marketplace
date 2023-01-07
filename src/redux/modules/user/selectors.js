import { get } from 'lodash'

export const categorStateSelector = (state) =>
  get(state, 'user')

export const categoryStatusSelector = (state) =>
  get(state, 'user.status', null)

export const usersSelector = (state) =>
  get(state, 'user.users', null)

export const userSelector = (state) =>
  get(state, 'user.user', null)

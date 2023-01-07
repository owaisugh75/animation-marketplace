import { get } from 'lodash'

export const subscribeStateSelector = (state) =>
  get(state, 'subscribe')

export const subscribeStatusSelector = (state) =>
  get(state, 'subscribe.status', null)

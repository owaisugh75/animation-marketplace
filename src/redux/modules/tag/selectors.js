import { get } from 'lodash'

export const categorStateSelector = (state) =>
  get(state, 'tag')

export const categoryStatusSelector = (state) =>
  get(state, 'tag.status', null)

export const tagsSelector = (state) =>
  get(state, 'tag.tags', null)

import { get } from 'lodash'

export const categorStateSelector = (state) =>
  get(state, 'category')

export const categoryStatusSelector = (state) =>
  get(state, 'category.status', null)

export const categoriesSelector = (state) =>
  get(state, 'category.categories', null)

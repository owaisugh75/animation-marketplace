import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const createCategory = createAction(CONSTANTS.CREATE_CATEGORY)
export const updateCategory = createAction(CONSTANTS.UPDATE_CATEGORY)
export const deleteCategory = createAction(CONSTANTS.DELETE_CATEGORY)
export const getCategories = createAction(CONSTANTS.GET_ALL_CATEGORY_BY_TYPE)
export const getAllCategories = createAction(CONSTANTS.GET_ALL_CATEGORY)
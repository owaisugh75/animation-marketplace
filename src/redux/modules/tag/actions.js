import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const createTag = createAction(CONSTANTS.CREATE_TAG)
export const updateTag = createAction(CONSTANTS.UPDATE_TAG)
export const deleteTag = createAction(CONSTANTS.DELETE_TAG)
export const getTags = createAction(CONSTANTS.GET_ALL_TAGS_BY_TYPE)
export const getAllTags = createAction(CONSTANTS.GET_ALL_TAGS)

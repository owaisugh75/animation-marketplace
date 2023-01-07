import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const createUser = createAction(CONSTANTS.CREATE_USER)
export const retrieveUser = createAction(CONSTANTS.RETRIEVE_USER)
export const updateUser = createAction(CONSTANTS.UPDATE_USER)
export const deleteUser = createAction(CONSTANTS.DELETE_USER)

export const getUsers = createAction(CONSTANTS.GET_ALL_USERS)

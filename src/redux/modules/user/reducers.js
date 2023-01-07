import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'
import { omit, reject } from 'lodash'

const getInitialState = () => {
  return {
    user: null,
    users: [],
    params: {
      page: 1,
      limit: 10,
      totalPages: 1,
      totalResults: 1,
    },
    status: 'INIT',
    error: null,
  }
}

export default handleActions({
  [requestSuccess(CONSTANTS.RETRIEVE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.RETRIEVE_USER),
    user: payload,
    error: null
  }),

  [requestFail(CONSTANTS.RETRIEVE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.RETRIEVE_USER),
    error: payload
  }),

  [requestSuccess(CONSTANTS.GET_ALL_USERS)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.GET_ALL_USERS),
    users: payload.results,
    params: {
      ...state.params,
      ...omit(payload, 'results')
    },
    error: null
  }),

  [requestFail(CONSTANTS.GET_ALL_USERS)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.GET_ALL_USERS),
    error: payload
  }),

  [requestSuccess(CONSTANTS.CREATE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.CREATE_USER),
    user: payload,
    error: null
  }),

  [requestFail(CONSTANTS.CREATE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.CREATE_USER),
    error: payload
  }),

  [requestSuccess(CONSTANTS.UPDATE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.UPDATE_USER),
    user: payload,
    error: null
  }),

  [requestFail(CONSTANTS.UPDATE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.UPDATE_USER),
    error: payload
  }),

  [requestSuccess(CONSTANTS.DELETE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.DELETE_USER),
    users: reject(state.users, { id: payload.id }),
    params: {
      ...state.params,
      totalPages: Math.max(state.params.totalPages - 1, 0),
    },
    error: null
  }),

  [requestFail(CONSTANTS.DELETE_USER)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.DELETE_USER),
    error: payload
  }),

}, getInitialState())

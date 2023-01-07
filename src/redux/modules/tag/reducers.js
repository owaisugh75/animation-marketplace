import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    tags: [],
  }
}

export default handleActions({
  [CONSTANTS.CREATE_TAG]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.CREATE_TAG)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
  }),
  [requestFail(CONSTANTS.CREATE_TAG)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
  }),
  
  [CONSTANTS.GET_ALL_TAGS_BY_TYPE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALL_TAGS_BY_TYPE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    tags: payload,
  }),
  [requestFail(CONSTANTS.GET_ALL_TAGS_BY_TYPE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    tags: [],
  }),

}, getInitialState())

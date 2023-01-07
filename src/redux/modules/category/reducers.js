import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    categories: [],
  }
}

export default handleActions({
  [CONSTANTS.CREATE_CATEGORY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.CREATE_CATEGORY)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
  }),
  [requestFail(CONSTANTS.CREATE_CATEGORY)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
  }),

  [CONSTANTS.GET_ALL_CATEGORY_BY_TYPE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.GET_ALL_CATEGORY_BY_TYPE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    categories: payload,
  }),
  [requestFail(CONSTANTS.GET_ALL_CATEGORY_BY_TYPE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    categories: [],
  }),
  
}, getInitialState())

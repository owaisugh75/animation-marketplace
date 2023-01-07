import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
  }
}

export default handleActions({
  [CONSTANTS.CREATE_STRIPE_CUSTOMER]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.CREATE_STRIPE_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
  }),
  [requestFail(CONSTANTS.CREATE_STRIPE_CUSTOMER)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
  }),
  
}, getInitialState())

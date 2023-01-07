import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'
import { omit } from 'lodash'

const getInitialState = () => {
  return {
    status: 'INIT',
    error: null,
    lotties: [],
    lottiesByCategory: [],
    currentLottie: null,
  }
}

export default handleActions({
  [CONSTANTS.CREATE_LOTTIE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.CREATE_LOTTIE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
  }),
  [requestFail(CONSTANTS.CREATE_LOTTIE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
  }),

  [requestSuccess(CONSTANTS.GET_ALL_LOTTIES)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.GET_ALL_LOTTIES),
    lotties: payload.results,
    params: {
      ...state.params,
      ...omit(payload, 'results')
    },
    error: null
  }),
  [requestFail(CONSTANTS.GET_ALL_LOTTIES)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.GET_ALL_LOTTIES),
    error: payload
  }),

  [CONSTANTS.FILTER_LOTTIE]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.FILTER_LOTTIE)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    lotties: payload,
  }),
  [requestFail(CONSTANTS.FILTER_LOTTIE)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    lotties: [],
  }),

  [CONSTANTS.RETRIEVE_LOTTIES]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.RETRIEVE_LOTTIES)]: (state, { payload }) => ({
    ...state,
    status: 'SUCCESS',
    lotties: payload,
  }),
  [requestFail(CONSTANTS.RETRIEVE_LOTTIES)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    lotties: [],
  }),

  [CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),
  [requestSuccess(CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY)]: (state, { payload }) => {
    return ({
      ...state,
      status: 'SUCCESS',
      lottiesByCategory: payload,
    })
  },
  [requestFail(CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY)]: (state, { payload }) => ({
    ...state,
    status: 'FAILED',
    lottiesByCategory: [],
  }),

  [CONSTANTS.CLEAR_LOTTIES]: (state, { payload }) => ({
    ...state,
    lottiesByCategory: [],
  }),

  [CONSTANTS.EDIT_LOTTIE]: (state, { payload }) => {
    localStorage.setItem('animatly_selected_lottie', JSON.stringify(payload))
    return ({
      ...state,
      currentLottie: payload,
    })
  },

}, getInitialState())

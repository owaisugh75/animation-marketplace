import { handleActions } from 'redux-actions'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  let cookie = JSON.parse(localStorage.getItem('animatly_cookie') || false)
  return {
    signupOpen: false,
    signinOpen: false,
    resetPasswordOpen: false,
    createAccountFirstOpen: false,
    newPasswordOpen: false,
    needToUpgradeOpen: false,
    subscribeOpen: false,
    successOpen: false,
    requestVerifyOpen: false,
    isSubscribeLoading: false,
    resetPasswordToken: '',
    cookie,
    successModalCustomInfo: null,
    isClosedVerification: false,

    subscribeInfo: null,
    searchMode: 'Icons',
    lottieColor: { hex: '000000', rgb: [0, 0, 0] },
    strokePercent: 50,
    convertingPercent: 0,
    editorLottieChangement: {
      color: { hex: '000000', rgb: [0, 0, 0] },
      stroke: 50,
      speed: 2.5,
      scale: 50
    }
  }
}

export default handleActions({
  [CONSTANTS.SET_SIGNUP_OPEN]: (state, { payload }) => ({
    ...state,
    signupOpen: payload.open
  }),
  [CONSTANTS.SET_SIGNIN_OPEN]: (state, { payload }) => ({
    ...state,
    signinOpen: payload.open
  }),
  [CONSTANTS.SET_RESET_PASSWORD_OPEN]: (state, { payload }) => ({
    ...state,
    resetPasswordOpen: payload.open
  }),
  [CONSTANTS.SET_CREATE_ACCOUNT_FIRST_OPEN]: (state, { payload }) => ({
    ...state,
    createAccountFirstOpen: payload.open
  }),
  [CONSTANTS.SET_NEW_PASSWORD_OPEN]: (state, { payload }) => ({
    ...state,
    newPasswordOpen: payload.open
  }),
  [CONSTANTS.SET_NEED_TO_UPGRADE_OPEN]: (state, { payload }) => ({
    ...state,
    needToUpgradeOpen: payload.open
  }),
  [CONSTANTS.SET_SEARCH_MODE]: (state, { payload }) => ({
    ...state,
    searchMode: payload.mode
  }),
  [CONSTANTS.SET_SUBSCRIBE_OPEN]: (state, { payload }) => ({
    ...state,
    subscribeOpen: payload.open,
    subscribeInfo: payload.subscribeInfo,
  }),
  [CONSTANTS.SET_SUCCESS_OPEN]: (state, { payload }) => ({
    ...state,
    successOpen: payload.open,
    successModalCustomInfo: payload.customInfo,
  }),
  [CONSTANTS.SET_REQUEST_VERIFY_OPEN]: (state, { payload }) => ({
    ...state,
    requestVerifyOpen: payload.open,
  }),
  [CONSTANTS.SET_IS_SUBSCRIBE_LOADING]: (state, { payload }) => ({
    ...state,
    isSubscribeLoading: payload.isLoading,
  }),
  [CONSTANTS.SET_LOTTIE_COLOR]: (state, { payload }) => ({
    ...state,
    lottieColor: payload.value,
  }),
  [CONSTANTS.SET_STROKE_PERCENT]: (state, { payload }) => ({
    ...state,
    strokePercent: payload.value,
  }),
  [CONSTANTS.SET_L2G_PERCENT]: (state, { payload }) => ({
    ...state,
    convertingPercent: payload,
  }),
  [CONSTANTS.SET_RESET_PASSWORD_TOKEN]: (state, { payload }) => ({
    ...state,
    resetPasswordToken: payload,
  }),
  [CONSTANTS.SET_COOKIE]: (state, { payload }) => ({
    ...state,
    cookie: payload,
  }),
  [CONSTANTS.CLOSE_VERIFICATION]: (state, { payload }) => ({
    ...state,
    isClosedVerification: payload,
  }),
  [CONSTANTS.SET_EDITOR_LOTTIE_CHANGEMENT]: (state, { payload }) => ({
    ...state,
    editorLottieChangement: payload
  }),
  [CONSTANTS.CLEAR_GLOBAL]: (state, { payload }) => {
    return getInitialState()
  },
}, getInitialState())

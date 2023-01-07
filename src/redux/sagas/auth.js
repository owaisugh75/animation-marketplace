import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/auth/constants'
import apiCall from '../api/apiCall'

const doSignup = apiCall({
  type: CONSTANTS.DO_SIGNUP,
  method: 'post',
  path: 'auth/register',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doLogin = apiCall({
  type: CONSTANTS.DO_LOGIN,
  method: 'post',
  path: 'auth/login',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doRefresh = apiCall({
  type: CONSTANTS.DO_REFRESH,
  method: 'post',
  path: 'auth/refresh',
  success: (res, action) => {
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doUpdateUserProfile = apiCall({
  type: CONSTANTS.UPDATE_USER_PROFILE,
  method: 'post',
  path: 'auth/update-profile',
  success: (res, action) => {
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doLogout = apiCall({
  type: CONSTANTS.DO_LOGOUT,
  method: 'post',
  path: 'auth/logout',
})

const doGoogleSignup = apiCall({
  type: CONSTANTS.DO_GOOGLE_SIGNUP,
  method: 'post',
  path: 'auth/google-signup',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doGoogleLogin = apiCall({
  type: CONSTANTS.DO_GOOGLE_LOGIN,
  method: 'post',
  path: 'auth/google-login',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doFacebookSignup = apiCall({
  type: CONSTANTS.DO_FACEBOOK_SIGNUP,
  method: 'post',
  path: 'auth/facebook-signup',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doFacebookLogin = apiCall({
  type: CONSTANTS.DO_FACEBOOK_LOGIN,
  method: 'post',
  path: 'auth/facebook-login',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data.tokens))
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doCheckEmailValidation = apiCall({
  type: CONSTANTS.CHECK_EMAIL_VALIDATION,
  method: 'post',
  path: 'auth/check-email-validation',
})

const doRefreshToken = apiCall({
  type: CONSTANTS.DO_REFRESH_TOKEN,
  method: 'post',
  path: 'auth/refresh-tokens',
  success: (res, action) => {
    localStorage.setItem('animatly_token', JSON.stringify(res.data))
  }
})

const doDeleteUser = apiCall({
  type: CONSTANTS.DELETE_AUTH_USER,
  method: 'post',
  path: 'auth/delete-user',
})

const doRequestAccountVerify = apiCall({
  type: CONSTANTS.REQUEST_ACCOUNT_VERIFY,
  method: 'get',
  path: 'auth/request-verify',
})

const doCheckAccountVerification = apiCall({
  type: CONSTANTS.CHECK_ACCOUNT_VERIFICATION,
  method: 'get',
  path: ({ payload }) => `/auth/check-verify/${payload.token}/`,
  success: (res, action) => {
    localStorage.setItem('animatly_user', JSON.stringify(res.data.user))
  }
})

const doResetPassword = apiCall({
  type: CONSTANTS.RESET_PASSWORD,
  method: 'post',
  path: 'auth/reset-password',
})

const doForgotPassword = apiCall({
  type: CONSTANTS.FORGOT_PASSWORD,
  method: 'post',
  path: 'auth/forgot-password',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.DO_SIGNUP, doSignup)
  yield takeLatest(CONSTANTS.DO_LOGIN, doLogin)
  yield takeLatest(CONSTANTS.DO_LOGOUT, doLogout)
  yield takeLatest(CONSTANTS.DO_REFRESH, doRefresh)
  yield takeLatest(CONSTANTS.DO_GOOGLE_SIGNUP, doGoogleSignup)
  yield takeLatest(CONSTANTS.DO_GOOGLE_LOGIN, doGoogleLogin)
  yield takeLatest(CONSTANTS.DO_FACEBOOK_SIGNUP, doFacebookSignup)
  yield takeLatest(CONSTANTS.DO_FACEBOOK_LOGIN, doFacebookLogin)
  yield takeEvery(CONSTANTS.CHECK_EMAIL_VALIDATION, doCheckEmailValidation)
  yield takeLatest(CONSTANTS.DO_REFRESH_TOKEN, doRefreshToken)
  yield takeLatest(CONSTANTS.UPDATE_USER_PROFILE, doUpdateUserProfile)
  yield takeLatest(CONSTANTS.DELETE_AUTH_USER, doDeleteUser)
  yield takeLatest(CONSTANTS.REQUEST_ACCOUNT_VERIFY, doRequestAccountVerify)
  yield takeLatest(CONSTANTS.CHECK_ACCOUNT_VERIFICATION, doCheckAccountVerification)
  yield takeLatest(CONSTANTS.RESET_PASSWORD, doResetPassword)
  yield takeLatest(CONSTANTS.FORGOT_PASSWORD, doForgotPassword)
}

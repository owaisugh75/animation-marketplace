import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const signup = createAction(CONSTANTS.DO_SIGNUP)
export const login = createAction(CONSTANTS.DO_LOGIN)
export const logout = createAction(CONSTANTS.DO_LOGOUT)
export const refresh = createAction(CONSTANTS.DO_REFRESH)
export const refreshToken = createAction(CONSTANTS.DO_REFRESH_TOKEN)
export const googleSignup = createAction(CONSTANTS.DO_GOOGLE_SIGNUP)
export const googleLogin = createAction(CONSTANTS.DO_GOOGLE_LOGIN)
export const facebookSignup = createAction(CONSTANTS.DO_FACEBOOK_SIGNUP)
export const facebookLogin = createAction(CONSTANTS.DO_FACEBOOK_LOGIN)
export const checkEmailValidation = createAction(CONSTANTS.CHECK_EMAIL_VALIDATION)
export const updateUserProfile = createAction(CONSTANTS.UPDATE_USER_PROFILE)
export const deleteUser = createAction(CONSTANTS.DELETE_AUTH_USER)
export const requestAccountVerify = createAction(CONSTANTS.REQUEST_ACCOUNT_VERIFY)
export const checkAccountVerification = createAction(CONSTANTS.CHECK_ACCOUNT_VERIFICATION)
export const resetPassword = createAction(CONSTANTS.RESET_PASSWORD)
export const forgotPassword = createAction(CONSTANTS.FORGOT_PASSWORD)

import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const setSignupOpen = createAction(CONSTANTS.SET_SIGNUP_OPEN)
export const setSigninOpen = createAction(CONSTANTS.SET_SIGNIN_OPEN)
export const setResetPasswordOpen = createAction(CONSTANTS.SET_RESET_PASSWORD_OPEN)
export const setCreateAccountFirstOpen = createAction(CONSTANTS.SET_CREATE_ACCOUNT_FIRST_OPEN)
export const setNewPasswordOpen = createAction(CONSTANTS.SET_NEW_PASSWORD_OPEN)
export const setNeedToUpgradeOpen = createAction(CONSTANTS.SET_NEED_TO_UPGRADE_OPEN)
export const setSearchMode = createAction(CONSTANTS.SET_SEARCH_MODE)
export const setSubscribeOpen = createAction(CONSTANTS.SET_SUBSCRIBE_OPEN)
export const setSuccessOpen = createAction(CONSTANTS.SET_SUCCESS_OPEN)
export const setRequestVerifyOpen = createAction(CONSTANTS.SET_REQUEST_VERIFY_OPEN)
export const setIsSubscribeLoading = createAction(CONSTANTS.SET_IS_SUBSCRIBE_LOADING)
export const setCookie = createAction(CONSTANTS.SET_COOKIE)
export const clearGlobal = createAction(CONSTANTS.CLEAR_GLOBAL)
export const closeVerification = createAction(CONSTANTS.CLOSE_VERIFICATION)

export const setLottieColor = createAction(CONSTANTS.SET_LOTTIE_COLOR)
export const setStrokePercent = createAction(CONSTANTS.SET_STROKE_PERCENT)
export const setEditorLottieChangement = createAction(CONSTANTS.SET_EDITOR_LOTTIE_CHANGEMENT)
export const setLottieToGifPercent = createAction(CONSTANTS.SET_L2G_PERCENT)
export const setResetPasswordToken = createAction(CONSTANTS.SET_RESET_PASSWORD_TOKEN)

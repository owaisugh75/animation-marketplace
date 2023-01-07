import { get } from 'lodash'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const signupOpenSelector = (state) =>
  get(state, 'global.signupOpen', null)

export const signinOpenSelector = (state) =>
  get(state, 'global.signinOpen', null)

export const resetPasswordOpenSelector = (state) =>
  get(state, 'global.resetPasswordOpen', null)

export const createAccountFirstOpenSelector = (state) =>
  get(state, 'global.createAccountFirstOpen', null)

export const newPasswordOpenSelector = (state) =>
  get(state, 'global.newPasswordOpen', null)

export const needToUpgradeOpenSelector = (state) =>
  get(state, 'global.needToUpgradeOpen', null)

export const subscribeOpenSelector = (state) =>
  get(state, 'global.subscribeOpen', null)

export const subscribeInfoSelector = (state) =>
  get(state, 'global.subscribeInfo', null)

export const searchModeSelector = (state) =>
  get(state, 'global.searchMode', null)

export const successOpenSelector = (state) =>
  get(state, 'global.successOpen', null)

export const isSubscribeLoadingSelector = (state) =>
  get(state, 'global.isSubscribeLoading', null)

export const lottieColorSelector = (state) =>
  get(state, 'global.lottieColor', null)

export const strokePercentSelector = (state) =>
  get(state, 'global.strokePercent', null)

export const convertingPercentSelector = (state) =>
  get(state, 'global.convertingPercent', null)

export const requestVerifyOpenSelector = (state) =>
  get(state, 'global.requestVerifyOpen', null)

export const resetPasswordTokenSelector = (state) =>
  get(state, 'global.resetPasswordToken', null)

export const cookieSelector = (state) =>
  get(state, 'global.cookie', null)

export const isClosedVerificationSelector = (state) =>
  get(state, 'global.isClosedVerification', null)

export const editorLottieChangementSelector = (state) =>
  get(state, 'global.editorLottieChangement', null)

export const successModalCustomInfoSelector = (state) =>
  get(state, 'global.successModalCustomInfo', null)

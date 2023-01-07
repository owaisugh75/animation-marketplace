import { get } from 'lodash'

export const lottieStateSelector = (state) =>
  get(state, 'lottie')

export const lottieStatusSelector = (state) =>
  get(state, 'lottie.status', null)

export const lottiesSelector = (state) =>
  get(state, 'lottie.lotties', null)

export const lottiesByCategorySelector = (state) =>
  get(state, 'lottie.lottiesByCategory', null)

export const currentLottieSelector = (state) =>
  get(state, 'lottie.currentLottie', null)


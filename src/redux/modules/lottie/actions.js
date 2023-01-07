import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

//----CRUD----
export const createLottie = createAction(CONSTANTS.CREATE_LOTTIE)
export const getLotties = createAction(CONSTANTS.GET_ALL_LOTTIES)
export const updateLottie = createAction(CONSTANTS.UPDATE_LOTTIE)
export const deleteLottie = createAction(CONSTANTS.DELETE_LOTTIE)

export const filterLottie = createAction(CONSTANTS.FILTER_LOTTIE)
export const retrieveLotties = createAction(CONSTANTS.RETRIEVE_LOTTIES)
export const retrieveLottieByCategory = createAction(CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY)
export const clearLotties = createAction(CONSTANTS.CLEAR_LOTTIES)
export const convertLottie = createAction(CONSTANTS.CONVERT_LOTTIE)
export const editLottie = createAction(CONSTANTS.EDIT_LOTTIE)
export const downloadLottie = createAction(CONSTANTS.DOWNLOAD_LOTTIE)
export const saveLottie = createAction(CONSTANTS.SAVE_LOTTIE)
export const checkSavedLottie = createAction(CONSTANTS.CHECK_SAVED_LOTTIE)
export const removeSavedLottie = createAction(CONSTANTS.REMOVE_SAVED_LOTTIE)

export const retrieveDownload = createAction(CONSTANTS.RETRIEVE_DOWNLOAD)
export const retrieveSaved = createAction(CONSTANTS.RETRIEVE_SAVED)

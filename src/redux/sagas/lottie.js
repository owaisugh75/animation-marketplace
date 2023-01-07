import { takeLatest, takeEvery } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/lottie/constants'
import apiCall from '../api/apiCall'
import { get, pick } from 'lodash'

const doCreateLottie = apiCall({
  type: CONSTANTS.CREATE_LOTTIE,
  method: 'post',
  path: 'lottie/',
})

const doGetLotties = apiCall({
  type: CONSTANTS.GET_ALL_LOTTIES,
  method: 'get',
  path: () => `/lottie/`,
  payloadOnSuccess: (res, { payload }) => ({
    ...res,
    ...pick(get(payload, 'params', {}), ['page', 'totalPages']),
  })
})

const doUpdateLottie = apiCall({
  type: CONSTANTS.UPDATE_LOTTIE,
  method: 'put',
  path: ({ payload }) => `/lottie/${payload.id}/${payload.type}`,
})

const doDeleteLottie = apiCall({
  type: CONSTANTS.DELETE_LOTTIE,
  method: 'delete',
  path: ({ payload }) => `/lottie/${payload.id}/${payload.type}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

const doFilterLottie = apiCall({
  type: CONSTANTS.FILTER_LOTTIE,
  method: 'post',
  path: 'lottie/filter',
})

const doRetrieveLotties = apiCall({
  type: CONSTANTS.RETRIEVE_LOTTIES,
  method: 'post',
  path: 'lottie/retrieve',
})

const doRetrieveLottieByCategory = apiCall({
  type: CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY,
  method: 'post',
  path: 'lottie/retrieve-by-category',
})

const doConvertLottie = apiCall({
  type: CONSTANTS.CONVERT_LOTTIE,
  method: 'post',
  path: 'lottie/convert',
})

const doDownloadLottie = apiCall({
  type: CONSTANTS.DOWNLOAD_LOTTIE,
  method: 'post',
  path: 'download/create',
})

const doSaveLottie = apiCall({
  type: CONSTANTS.SAVE_LOTTIE,
  method: 'post',
  path: 'saved/create',
})

const doRemoveSavedLottie = apiCall({
  type: CONSTANTS.REMOVE_SAVED_LOTTIE,
  method: 'post',
  path: 'saved/remove',
})

const doCheckSavedLottie = apiCall({
  type: CONSTANTS.CHECK_SAVED_LOTTIE,
  method: 'post',
  path: 'saved/check',
})

const doRetrieveDownload = apiCall({
  type: CONSTANTS.RETRIEVE_DOWNLOAD,
  method: 'post',
  path: 'download/retrieve',
})

const doRetrieveSaved = apiCall({
  type: CONSTANTS.RETRIEVE_SAVED,
  method: 'post',
  path: 'saved/retrieve',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.CREATE_LOTTIE, doCreateLottie)
  yield takeEvery(CONSTANTS.GET_ALL_LOTTIES, doGetLotties)
  yield takeLatest(CONSTANTS.UPDATE_LOTTIE, doUpdateLottie)
  yield takeLatest(CONSTANTS.DELETE_LOTTIE, doDeleteLottie)

  yield takeLatest(CONSTANTS.FILTER_LOTTIE, doFilterLottie)
  yield takeLatest(CONSTANTS.RETRIEVE_LOTTIES, doRetrieveLotties)
  yield takeLatest(CONSTANTS.RETRIEVE_LOTTIE_BY_CATEGORY, doRetrieveLottieByCategory)
  yield takeLatest(CONSTANTS.CONVERT_LOTTIE, doConvertLottie)
  yield takeLatest(CONSTANTS.DOWNLOAD_LOTTIE, doDownloadLottie)
  yield takeLatest(CONSTANTS.SAVE_LOTTIE, doSaveLottie)
  yield takeLatest(CONSTANTS.CHECK_SAVED_LOTTIE, doCheckSavedLottie)
  yield takeLatest(CONSTANTS.REMOVE_SAVED_LOTTIE, doRemoveSavedLottie)
  yield takeLatest(CONSTANTS.RETRIEVE_DOWNLOAD, doRetrieveDownload)
  yield takeLatest(CONSTANTS.RETRIEVE_SAVED, doRetrieveSaved)
}

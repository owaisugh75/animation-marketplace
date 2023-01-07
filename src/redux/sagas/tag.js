import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/tag/constants'
import apiCall from '../api/apiCall'

const doCreateTag = apiCall({
  type: CONSTANTS.CREATE_TAG,
  method: 'post',
  path: 'tag/create',
})

const doGetTags = apiCall({
  type: CONSTANTS.GET_ALL_TAGS_BY_TYPE,
  method: 'post',
  path: 'tag/retrieve',
})

const doGetAllTags = apiCall({
  type: CONSTANTS.GET_ALL_TAGS,
  method: 'get',
  path: 'tag/getAll',
})

const doUpdateTag = apiCall({
  type: CONSTANTS.UPDATE_TAG,
  method: 'put',
  path: ({ payload }) => `/tag/${payload.id}/`
})

const doDeleteTag = apiCall({
  type: CONSTANTS.DELETE_TAG,
  method: 'delete',
  path: ({ payload }) => `/tag/${payload.id}`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.CREATE_TAG, doCreateTag)
  yield takeLatest(CONSTANTS.GET_ALL_TAGS_BY_TYPE, doGetTags)
  yield takeEvery(CONSTANTS.GET_ALL_TAGS, doGetAllTags)
  yield takeLatest(CONSTANTS.UPDATE_TAG, doUpdateTag)
  yield takeLatest(CONSTANTS.DELETE_TAG, doDeleteTag)
}

import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/category/constants'
import apiCall from '../api/apiCall'

const doCreateCategory = apiCall({
  type: CONSTANTS.CREATE_CATEGORY,
  method: 'post',
  path: 'category/create',
})

const doGetCategories = apiCall({
  type: CONSTANTS.GET_ALL_CATEGORY_BY_TYPE,
  method: 'post',
  path: 'category/retrieve',
})

const doGetAllCategories = apiCall({
  type: CONSTANTS.GET_ALL_CATEGORY,
  method: 'get',
  path: 'category/getAll',
})

const doUpdateCategory = apiCall({
  type: CONSTANTS.UPDATE_CATEGORY,
  method: 'put',
  path: ({ payload }) => `/category/${payload.id}/`
})

const doDeleteCategory = apiCall({
  type: CONSTANTS.DELETE_CATEGORY,
  method: 'delete',
  path: ({ payload }) => `/category/${payload.id}`,
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.CREATE_CATEGORY, doCreateCategory)
  yield takeLatest(CONSTANTS.GET_ALL_CATEGORY_BY_TYPE, doGetCategories)
  yield takeEvery(CONSTANTS.GET_ALL_CATEGORY, doGetAllCategories)
  yield takeLatest(CONSTANTS.UPDATE_CATEGORY, doUpdateCategory)
  yield takeLatest(CONSTANTS.DELETE_CATEGORY, doDeleteCategory)
}

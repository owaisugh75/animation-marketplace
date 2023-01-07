import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/user/constants'
import apiCall from '../api/apiCall'
import { get, pick } from 'lodash'

const doGetUser = apiCall({
  type: CONSTANTS.RETRIEVE_USER,
  method: 'get',
  path: ({ payload }) => `/users/${payload.id}/`
})

const doGetUsers = apiCall({
  type: CONSTANTS.GET_ALL_USERS,
  method: 'get',
  path: () => `/users/`,
  payloadOnSuccess: (res, { payload }) => ({
    ...res,
    ...pick(get(payload, 'params', {}), ['page', 'totalPages']),
  })
})

const doCreateUser = apiCall({
  type: CONSTANTS.CREATE_USER,
  method: 'post',
  path: () => `/users/`
})

const doUpdateUser = apiCall({
  type: CONSTANTS.UPDATE_USER,
  method: 'put',
  path: ({ payload }) => `/users/${payload.id}/`
})

const doDeleteUser = apiCall({
  type: CONSTANTS.DELETE_USER,
  method: 'delete',
  path: ({ payload }) => `/users/${payload.id}`,
  payloadOnSuccess: (res, { payload }) => ({ id: payload.id })
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.RETRIEVE_USER, doGetUser)
  yield takeEvery(CONSTANTS.GET_ALL_USERS, doGetUsers)
  yield takeLatest(CONSTANTS.CREATE_USER, doCreateUser)
  yield takeLatest(CONSTANTS.UPDATE_USER, doUpdateUser)
  yield takeLatest(CONSTANTS.DELETE_USER, doDeleteUser)
}

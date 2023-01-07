import { takeEvery, takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/subscribe/constants'
import apiCall from '../api/apiCall'
import { get, pick } from 'lodash'

const doCreateStripeCustomer = apiCall({
  type: CONSTANTS.CREATE_STRIPE_CUSTOMER,
  method: 'post',
  path: 'stripe/create-customer',
})

const doCreateStripeSubscription = apiCall({
  type: CONSTANTS.CREATE_STRIPE_SUBSCRIPTION,
  method: 'post',
  path: 'stripe/create-subscription',
})

const doUpdateStripeSubscription = apiCall({
  type: CONSTANTS.UPDATE_STRIPE_SUBSCRIPTION,
  method: 'post',
  path: 'stripe/update-subscription',
})

const doGetStripeSubscriptions = apiCall({
  type: CONSTANTS.GET_ALL_STRIPE_SUBSCRIPTIONS,
  method: 'get',
  path: () => `/stripe/`,
  payloadOnSuccess: (res, { payload }) => ({
    ...res,
    ...pick(get(payload, 'params', {}), ['page', 'totalPages']),
  })
})

const doCancelStripeSubscription = apiCall({
  type: CONSTANTS.CANCEL_STRIPE_SUBSCRIPTION,
  method: 'post',
  path: 'stripe/cancel-subscription',
})

const doCreatePaypalSubscription = apiCall({
  type: CONSTANTS.CREATE_PAYPAL_SUBSCRIPTION,
  method: 'post',
  path: 'paypal/create-subscription',
})

const doUpdatePaypalSubscription = apiCall({
  type: CONSTANTS.UPDATE_PAYPAL_SUBSCRIPTION,
  method: 'post',
  path: 'paypal/update-subscription',
})

const doUGetPaypalSubscriptions = apiCall({
  type: CONSTANTS.GET_ALL_PAYPAL_SUBSCRIPTIONS,
  method: 'get',
  path: () => `/paypal/`,
  payloadOnSuccess: (res, { payload }) => ({
    ...res,
    ...pick(get(payload, 'params', {}), ['page', 'totalPages']),
  })
})

const doCancelPaypalSubscription = apiCall({
  type: CONSTANTS.CANCEL_PAYPAL_SUBSCRIPTION,
  method: 'post',
  path: 'paypal/cancel-subscription',
})

export default function* rootSaga() {
  yield takeLatest(CONSTANTS.CREATE_STRIPE_CUSTOMER, doCreateStripeCustomer)
  yield takeLatest(CONSTANTS.CREATE_STRIPE_SUBSCRIPTION, doCreateStripeSubscription)
  yield takeLatest(CONSTANTS.UPDATE_STRIPE_SUBSCRIPTION, doUpdateStripeSubscription)
  yield takeEvery(CONSTANTS.GET_ALL_STRIPE_SUBSCRIPTIONS, doGetStripeSubscriptions)
  yield takeLatest(CONSTANTS.CANCEL_STRIPE_SUBSCRIPTION, doCancelStripeSubscription)

  yield takeLatest(CONSTANTS.CREATE_PAYPAL_SUBSCRIPTION, doCreatePaypalSubscription)
  yield takeLatest(CONSTANTS.UPDATE_PAYPAL_SUBSCRIPTION, doUpdatePaypalSubscription)
  yield takeEvery(CONSTANTS.GET_ALL_PAYPAL_SUBSCRIPTIONS, doUGetPaypalSubscriptions)
  yield takeLatest(CONSTANTS.CANCEL_PAYPAL_SUBSCRIPTION, doCancelPaypalSubscription)
}

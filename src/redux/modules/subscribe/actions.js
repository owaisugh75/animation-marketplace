import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

//-----------stripe-----------------
export const createStripeCustomer = createAction(CONSTANTS.CREATE_STRIPE_CUSTOMER)
export const createStripeSubscription = createAction(CONSTANTS.CREATE_STRIPE_SUBSCRIPTION)
export const updateStripeSubscription = createAction(CONSTANTS.UPDATE_STRIPE_SUBSCRIPTION)
export const getStripeSubscriptions = createAction(CONSTANTS.GET_ALL_STRIPE_SUBSCRIPTIONS)
export const cancelStripeSubscription = createAction(CONSTANTS.CANCEL_STRIPE_SUBSCRIPTION)

//-----------paypal-----------------
export const createPaypalSubscription = createAction(CONSTANTS.CREATE_PAYPAL_SUBSCRIPTION)
export const updatePaypalSubscription = createAction(CONSTANTS.UPDATE_PAYPAL_SUBSCRIPTION)
export const getPaypalSubscriptions = createAction(CONSTANTS.GET_ALL_PAYPAL_SUBSCRIPTIONS)
export const cancelPaypalSubscription = createAction(CONSTANTS.CANCEL_PAYPAL_SUBSCRIPTION)

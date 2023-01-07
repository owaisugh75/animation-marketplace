import { all } from 'redux-saga/effects'
import auth from './auth'
import subscribe from './subscribe'
import category from './category'
import tag from './tag'
import lottie from './lottie'
import user from './user'

export default function* rootSaga() {
  yield all([
    auth(),
    subscribe(),
    category(),
    tag(),
    lottie(),
    user(),
  ])
}

import { combineReducers } from 'redux'

import global from './modules/global/reducers'
import auth from './modules/auth/reducers'
import subscribe from './modules/subscribe/reducers'
import category from './modules/category/reducers'
import tag from './modules/tag/reducers'
import lottie from './modules/lottie/reducers'
import user from './modules/user/reducers'

export default combineReducers({
  global,
  auth,
  subscribe,
  category,
  tag,
  lottie,
  user,
})

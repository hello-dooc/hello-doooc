// import {combineReducers} from  'redux';
// import { reducer as registerReducer } from '../register/store'


// // 组合所有reducer
// export default combineReducers({
//   register:registerReducer
// })
import { combineReducers } from 'redux'

import {reducer as address} from '../address/reducer'

const reducer = combineReducers({
    address
})

export default reducer

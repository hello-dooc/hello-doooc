// import {combineReducers} from  'redux';
// import { reducer as registerReducer } from '../register/store'


// // 组合所有reducer
// export default combineReducers({
//   register:registerReducer
// })
import { combineReducers } from 'redux'
import { reducer as petMarket } from '../market/petMarket'

const reducer = combineReducers({
    petMarket
})

export default reducer

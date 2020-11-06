import { combineReducers } from 'redux'
import { reducer as petMarket } from '../market/petMarket'

const reducer = combineReducers({
    petMarket
})

export default reducer
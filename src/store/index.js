
// import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import reducer from './reducer'

// export default createStore(reducer,applyMiddleware(logger,thunk))
import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import reducer from './reducer'
const store = createStore(reducer,applyMiddleware(thunk))

export default store

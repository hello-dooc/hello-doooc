"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import reducer from './reducer'
// export default createStore(reducer,applyMiddleware(logger,thunk))
var store = (0, _redux.createStore)(_reducer["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"]));
var _default = store;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _petMarket = require("../market/petMarket");

// import {combineReducers} from  'redux';
// import { reducer as registerReducer } from '../register/store'
// // 组合所有reducer
// export default combineReducers({
//   register:registerReducer
// })
var reducer = (0, _redux.combineReducers)({
  petMarket: _petMarket.reducer
});
var _default = reducer;
exports["default"] = _default;
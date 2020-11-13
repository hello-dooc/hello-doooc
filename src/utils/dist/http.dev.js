"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.post = exports.put = exports.get = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var get = function get(_ref) {
  var url = _ref.url,
      params = _ref.params;
  return new Promise(function (resolve, reject) {
    (0, _axios["default"])({
      url: url,
      params: params
    }).then(function (result) {
      resolve(result);
    }).then(function (error) {
      reject(error);
    });
  });
};

exports.get = get;

var post = function post(url, params) {
  return new Promise(function (resolve, reject) {
    _axios["default"].post(url, JSON.stringify(params)).then(function (res) {
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.post = post;

var put = function put(_ref2) {
  var url = _ref2.url,
      params = _ref2.params;
  return new Promise(function (resolve, reject) {
    (0, _axios["default"])({
      url: url,
      method: 'put',
      params: params
    }).then(function (result) {
      resolve(result);
    }).then(function (error) {
      reject(error);
    });
  });
}; // const put = (url,params) => {
//   return new Promise((resolve, reject) => {
//     axios.put(url,params)
//   .then(res => {
//       resolve(res);
//   })
//   .catch(err =>{
//       reject(err)
//   })
// });
// }


exports.put = put;

var del = function del(_ref3) {
  var url = _ref3.url,
      params = _ref3.params;
  return new Promise(function (resolve, reject) {
    (0, _axios["default"])({
      url: url,
      method: 'delete',
      params: params
    }).then(function (result) {
      resolve(result);
    }).then(function (error) {
      reject(error);
    });
  });
};

exports.del = del;
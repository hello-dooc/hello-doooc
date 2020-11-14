"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = exports.put = exports.get = void 0;

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

var put = function put(url) {
  return new Promise(function (resolve, reject) {
    _axios["default"].put(url).then(function (res) {
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.put = put;
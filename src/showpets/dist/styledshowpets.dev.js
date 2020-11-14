"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageButtonWrap = exports.MyShowWrap = exports.YouLikeWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _owncenter = _interopRequireDefault(require("@a/images/showpets/owncenter.png"));

var _shaibg = _interopRequireDefault(require("@a/images/showpets/shaibg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n.button-box{\n    width:214px;\n    height:62px;\n    margin:0 auto;\n    padding-top:35px;\n    display:flex;\n    justify-content:space-between;\n    .left-button{\n        height:25px;\n        width:72px;\n        border:1px solid #6d6d6d;\n        border-radius:3px;\n        text-align:center;\n        line-height:25px;\n        color:#6d6d6d;\n        font-size:14px;\n    }\n    .middle-box{\n        /* width:25px; */\n        height:27px;\n        color:#6d6d6d;\n        font-size:14px;\n        display:flex;\n    }\n}\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:964px;\n    padding-top:60px;\n    .imgbox{\n        margin:0 auto;\n        width:576px;\n        height:607px;\n        display:flex;\n        flex-wrap:wrap;\n        justify-content:space-between;\n    }\n    .topimg{\n        width:244px;\n        height:285px;\n        background:#451;\n        border-radius:10px;\n        margin-bottom:38px;\n        img{\n            display:block;\n            width:100%;\n            height:100%;\n        }\n    }\n   \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height:386px;\n    width:863px;\n    margin:0 auto;\n    .like-title{\n        text-align:center;\n        font-size:36px;\n        line-height:36px;\n        color:#f5a64a;\n        margin-bottom:64px;\n    }\n    ul{\n        width:863px;\n        height:276px;\n        display:flex;\n        justify-content:space-between;\n    }\n    li{\n        height:276px;\n        width:164px;\n    }\n    .img-box{\n        width:164px;\n        height:220px;\n        margin-bottom:6px;\n        border-radius:3px;\n        img{\n            display:block;\n            width:100%;\n            height:100%;\n        }\n    }\n    .good-name{\n        font-size:12px;\n        line-height:12px;\n        margin-bottom:14px;\n        text-align:center;\n    }\n    .good-price{\n        font-size:18px;\n        line-height:18px;\n        text-align:center;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   \n    header{\n        height:545px;\n        background:url(", ");\n    }\n    footer{\n        /* height:730px; */\n        height:640px;\n        width:100%;\n        background:url(", ");\n    }\n    .contain{\n        height:1203px;\n        width:1300px;\n        margin:0 auto;\n    .middle{\n        height:764px;\n    }\n    .left-nav{\n        width:100px;\n        height:153px;\n        background:#ccc;\n        float:left;\n        padding-top:193px;\n        margin-left:79px;\n        margin-right:183px;\n    }\n\n\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _owncenter["default"], _shaibg["default"]);

exports.Container = Container;

var YouLikeWrap = _styledComponents["default"].div(_templateObject2());

exports.YouLikeWrap = YouLikeWrap;

var MyShowWrap = _styledComponents["default"].div(_templateObject3());

exports.MyShowWrap = MyShowWrap;

var PageButtonWrap = _styledComponents["default"].div(_templateObject4());

exports.PageButtonWrap = PageButtonWrap;
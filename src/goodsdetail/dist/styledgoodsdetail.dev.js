"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailMiddleWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bg = _interopRequireDefault(require("@a/images/buyhome/bg.png"));

var _scbg = _interopRequireDefault(require("@a/images/buyhome/scbg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition:relative;\n.putcar{\n    width:100px;\n    background:#f5a64a;\n    position:absolute;\n    text-align:center;\n    border-radius:6px;\n    right:100px;\n    bottom:30px;\n}\n.left-box{\n    float:left;\n    width:14px;\n    height:32px;\n    padding-top:172px;\n    margin-left:27px;\n    margin-right:22px;\n    span{\n        display:block;\n        width:0;\n        height:0;\n        border-top:14px solid transparent;\n        border-bottom:14px solid transparent;\n        border-right:14px solid #f5a64a;\n        &:hover{\n            cursor:pointer;\n        }\n    }\n}\n.middle-box{\n    float:left;\n    width:272px;\n    height:346px;\n    padding-top:74px;\n    margin-right:50px;\n    img{\n        display:block;\n        width:100%;\n        height:100%;\n    }\n}\n.right-box{\n    float:left;\n    width:194px;\n    h1{\n        font-size:10px;\n        line-height:10px;\n        padding-top:25px;\n    }\n    h2{\n        font-size:10px;\n        line-height:10px;\n        padding-top:16px;\n        margin-left:14px;\n        margin-bottom:10px;\n    }\n    h3{\n        font-size:10px;\n        width:190px;\n        line-height:12px;\n        word-wrap: break-word;\n        margin-bottom:104px;\n    }\n    ul{\n        width:192px;\n        li{\n            width:192px;\n            height:12px;\n            margin-bottom:10px;\n            span{\n                float:left;\n                font-size:10px;\n                line-height:12px;\n                margin-right:10px;\n                height:12px;\n                width:48px;\n                display:block;\n                text-align-last:justify;\n            }\n            span:nth-child(2){\n                text-align-last:left;\n                width:60px;\n            }\n        }\n        li:nth-child(2n-1){\n            background:#f5a64a;\n        }\n    }\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    header{\n        height:96px;\n      \n    }\n    footer{\n        /* height:730px; */\n        height:640px;\n        width:100%;\n        background:url(", ");\n    }\n    .detail-con{\n        min-height:732px;\n        background:url(", ");\n        .detail-wrap{\n            width:1300px;\n            margin:0 auto;\n            min-height:732px;\n            padding-top:75px;\n        }\n    }\n    .detail-left{\n        float:left;\n        width:112px;\n        height:106px;\n        img{\n            display:block;\n            width:100%;\n            height:100%;\n        }\n    }\n    .detail-middle{\n        float:left;\n        padding-top:8px;\n        margin:0 73px 0 48px;\n        span{\n            display:block;\n            width:60px;\n            height:30px;\n            border-bottom:2px solid #f5a64a;\n            font-size:12px;\n            text-align:center;\n            line-height:30px;\n\n        }\n    }\n    .detail-right{\n        float:left;\n        width:835px;\n        height:578px;\n        background:rgba(249,208,164,.6);\n        padding:30px 56px;\n        .detail-box{\n            width:723px;\n            height:523px;\n            background:rgba(252,242,231,.7);\n            box-shadow:0 10px 30px #888888;\n        }\n    }\n    \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _scbg["default"], _bg["default"]);

exports.Container = Container;

var DetailMiddleWrap = _styledComponents["default"].div(_templateObject2());

exports.DetailMiddleWrap = DetailMiddleWrap;
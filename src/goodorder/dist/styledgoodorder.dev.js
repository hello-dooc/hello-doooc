"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bg = _interopRequireDefault(require("@a/images/buyhome/bg.png"));

var _scbg = _interopRequireDefault(require("@a/images/buyhome/scbg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height:300px;\n    padding:30px 56px;\n    position:relative;\n    button:focus{\n        outline: none;\n        border-color: transparent;\n    }\n    .sumprice{\n        font-size:20px;\n        p{\n            background:#f5a64a;\n            padding:5px;\n            width:112px;\n            border-radius:6px;\n            float:right;\n        }\n    }\n    select:focus{\n        outline: none;\n    }\n    input:focus{\n        outline: none;\n    }\n    .select-lo{\n        font-size:14px;\n        span{\n            padding-right:15px;\n        }\n        p{\n            margin-bottom:10px;\n        }\n    }\n    .select-ad{\n        float:left;\n        line-height:30px;\n    }\n    .search-item{\n        float:left;\n        margin-left:10px;\n    }\n\n\n    .ant-select ant-select-single,.ant-select-show-arrow{\n        height:18px;\n        line-height:18px;\n        .ant-select-selector{\n            background:#f5a64a;\n            height:18px;\n            line-height:18px;\n            color:#000;\n            .ant-select-selection-search-input{\n                height:18px;\n                line-height:18px;\n            }\n        }\n        .ant-select-selection-item{\n            height:18px;\n            line-height:18px;\n            font-size:10px;\n        }\n    }\n\n  \n\n    .good-detail{\n        width:590px;\n        margin-top:40px;\n        padding-top:20px;\n        .img-box{\n            float:left;\n            width:150px;\n            height:150px;\n            margin-right:132px;\n            img{\n                display:block;\n                width:100%;\n                height:100%;\n            }\n        }\n    }\n\n    .right-box{\n        height:230px;\n        width:267px;\n        float:left;\n        h1{\n            float:left;\n            font-size:20px;\n            line-height:22px;\n            width:116px;\n            height:44px;\n            text-overflow: -o-ellipsis-lastline;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            line-clamp: 2;\n            -webkit-box-orient: vertical;\n        }\n        .prinum{\n            float:right;\n            text-align:right;\n            h2{\n                font-size:20px;\n                line-height:22px;\n            }\n            h3{\n                font-size:20px;\n                line-height:22px;\n            }\n        }\n        \n        .count-box{\n            clear:both;\n            font-size:20px;\n        }\n    }\n\n    .select-num{\n        padding-top:30px;\n        width:267px;\n        height:75px;\n        float:left; \n        p{\n            font-size:20px;\n            line-height:22px;\n            width:100px;\n            float:left;\n        }\n        .button-num{\n            height:22px;\n            width:96px;\n            float:right;\n            position:relative;\n            .minus{\n                width:22px;\n                height:22px;\n                text-align:center;\n                position:absolute;\n                z-index:1;\n                left:0;\n                background:#fff;\n                border:none;\n            }\n            .putvalue{\n                background:#f5a64a;\n                border:none;\n                width:96px;\n                height:22px;\n                text-align:center;\n                position:absolute;\n            }\n            .add{\n                width:22px;\n                height:22px;\n                text-align:center;\n                position:absolute;\n                z-index:1;\n                right:0;\n                border:none;\n                background:#fff;\n                &:focus{\n                    outline: none;\n                    border-color: transparent;\n                }\n            }\n    }\n  \n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    header{\n        height:96px;\n        \n    }\n    footer{\n       /*  height:730px; */\n       height:640px;\n        width:100%;\n        background:url(", ");\n    }\n    .detail-con{\n        min-height:732px;\n        background:url(", ");\n        .detail-wrap{\n            width:1300px;\n            margin:0 auto;\n            min-height:732px;\n            padding-top:75px;\n        }\n    }\n    .detail-left{\n        float:left;\n        width:112px;\n        height:106px;\n        img{\n            display:block;\n            width:100%;\n            height:100%;\n        }\n    }\n    .detail-middle{\n        float:left;\n        padding-top:8px;\n        margin:0 73px 0 48px;\n        span{\n            display:block;\n            width:60px;\n            height:30px;\n            border-bottom:2px solid #f5a64a;\n            font-size:12px;\n            text-align:center;\n            line-height:30px;\n\n        }\n    }\n    .detail-right{\n        float:left;\n        width:835px;\n        height:578px;\n        background:rgba(249,208,164,.6);\n        padding:30px 56px;\n        position:relative;\n        .detail-box{\n            width:723px;\n            height:523px;\n            background:rgba(252,242,231,.7);\n            box-shadow:0 10px 30px #888888;\n        }\n    }\n    .left-box{\n        width:14px;\n        height:32px;\n        position:absolute;\n        left:15px; top:218px;\n        span{\n            display:block;\n            width:0;\n            height:0;\n            border-top:14px solid transparent;\n            border-bottom:14px solid transparent;\n            border-right:14px solid #444341;\n        }\n    }\n    .detail-box{\n        overflow-y:scroll;\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _scbg["default"], _bg["default"]);

exports.Container = Container;

var OrderDetailWrap = _styledComponents["default"].div(_templateObject2());

exports.OrderDetailWrap = OrderDetailWrap;
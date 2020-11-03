"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shoppingCartN_ = _interopRequireDefault(require("@a/images/ShoppingCart/shoppingCartN_02.png"));

var _bg = _interopRequireDefault(require("@a/images/bg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .con{\n    /* width:1920px;      \n    overflow:auto; */\n    background:url(", ");\n    background-size:100%;\n    header {\n      height: 96px;\n      line-height: 96px;\n      text-align: center;\n      font-size: 30px;\n      background-color: #eeeeee;\n    }\n    main{\n      width:1300px;\n      margin:0 auto;\n      padding: 76px 170px 78px 0;\n      display:flex;\n      justify-content:space-between;\n\n\n      img{\n        height: 110px;\n        width:110px;\n      }\n      p{\n        font-size:14px;\n        width:70px;\n        height: 28px;\n        border-bottom: 4px solid #f5a64a;\n      }\n      .cart{\n        width:840px;\n        height: 578px;\n        background:#f8e3cc;\n        /* opacity: 0.75; */\n        display:flex;\n        .cartCon{\n          height:520px;\n          width:726px;\n          background:#fff;\n          margin:auto;\n          box-shadow: #c2b5a6 0px 0px 20px 5px;\n          padding-top:180px;\n          display:flex;\n          justify-content: center;\n          opacity: 1;\n          img{\n            height:192px;\n            height:157px;\n          }\n          div{\n            /* padding:20px 10px; */\n            display:flex;\n            flex-flow: column;\n            padding-left:15px;\n            button{\n              margin-top:20px;\n              height:32px;\n              width:100px;\n              line-height:32px;\n              font-size:12px;\n              background:#f5a64a;\n            }\n          }\n        }\n      }\n    }\n    footer{\n      height: 732px;\n      /* background-color:#eeeeee; */\n      background:url(", ") no-repeat;\n      background-size:100%;\n      img{\n        /* width:1920px; */\n        /* width:100%; */\n        display:block;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _bg["default"], _shoppingCartN_["default"]);

exports.Container = Container;
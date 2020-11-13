"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height:558px;\n    overflow-y:auto;\n    width:800px;\n    p{\n        margin:0;\n        padding-top:10px;\n    }\n    .shopDetail{\n        height:150px;\n        /* background:#eee; */\n        display:flex;\n        justify-content:space-around; \n        align-items:center;\n        border-bottom:1px solid black;\n        img{\n            height:110px;\n            width:92px;\n        }\n        .shopName{\n            width:90px;\n            height:24px;\n            border-radius:2px;\n            /* background:#f5a64a; */\n            text-align:center;\n            overflow:hidden;\n          text-overflow:ellipsis;\n          white-space:nowrap\n        }\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Info = _styledComponents["default"].div(_templateObject());

exports.Info = Info;
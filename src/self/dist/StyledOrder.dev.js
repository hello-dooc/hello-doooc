"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _best = _interopRequireDefault(require("@a/images/best.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    header {\n        height: 96px;\n        line-height: 96px;\n        text-align: center;\n        font-size: 30px;\n        background-color: #eeeeee;\n    }\n    main{\n        width:1300px;\n        margin:0 auto;\n        .category{\n            height:658px;\n            display:flex;\n            ul{\n                width:200px;\n                text-align:center;\n            }\n        }\n        .recommend{\n            height:439px;\n            width:864px;\n            margin:0 auto;\n            text-align:center;\n            background-color:#eee;\n            .shopLike{\n                display:flex;\n                justify-content:space-between;\n                div{\n                    padding:65px 0;\n                    img{\n                        width:164px;\n                        height:218px;\n                    }\n                }\n            }\n        }\n    }\n    footer{\n        height: 607px;\n        background:url(", ") no-repeat;\n        background-size:100%\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _best["default"]);

exports.Container = Container;
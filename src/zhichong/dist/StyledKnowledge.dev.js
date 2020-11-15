"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TrFooter = _interopRequireDefault(require("@a/images/Trainning/TrFooter.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .con{\n        .train{\n            height:295px;\n            width:1300px;\n            margin:0 auto;\n            text-align:center;\n            padding-top:105px;\n            h2{\n                height:24px;\n                line-height:24px;\n                font-size:24px;\n                padding-bottom:40px;\n            }\n            h3{\n                height:36px;\n                line-height:36px;\n                font-size:30px;\n                font-family:Segoe Print;\n            }\n        }\n\n        .banner{\n            width:1300px;\n            margin:0 auto;\n            height:663px;\n            position: relative;\n            .petsItem{\n                position: absolute;\n                .petsText{\n                    width:100%;\n                    background-color:rgba(0,0,0,0.4);\n                    color:#fff;\n                    padding: 0 35px;\n                    font-size:16px;\n                    font-family:SimSun;\n                    position: absolute;\n                    bottom:10px;\n                }\n            }\n            >div{\n                &:nth-child(1){\n                bottom:0;\n                left:0;\n                z-index:1\n                }\n                &:nth-child(2){\n                    bottom:0;\n                    left:264px;\n                    z-index:5;\n                }\n                &:nth-child(3){\n                    bottom:0;\n                    left:480px;\n                    z-index:3;\n                }\n                &:nth-child(4){\n                    bottom:0;\n                    left:778px;\n                    z-index:1\n                }\n                &:nth-child(5){\n                    bottom:0;\n                    right:0px;\n                    z-index:5;\n                }\n            }\n        }\n        \n        .news{\n            height:1435px;\n            width:1300px;\n            margin:0 auto;\n            padding-top:20px;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-around;\n            .newsItem{\n                display:flex;\n                flex-direction:row;\n                justify-content:space-around;\n                dl{\n                    display:flex;\n                    flex-direction:column;\n                    padding-top:70px;\n                    font-size:24px;\n                    font-family:SimSun;\n                    width:500px;\n                    dd{\n                        font-size:30px;\n                    }\n                    dt{\n                        padding-top:60px;\n                        font-size:18px;\n                        line-height:35px;\n                    }\n                }\n            }\n        }\n\n        #link{\n            background:url(", ") no-repeat;\n            /* background-size:100% */\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _TrFooter["default"]);

exports.Container = Container;
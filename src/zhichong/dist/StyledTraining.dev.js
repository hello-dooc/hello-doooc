"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _navBg_ = _interopRequireDefault(require("@a/images/Trainning/navBg_03.png"));

var _banBg1px_ = _interopRequireDefault(require("@a/images/Trainning/banBg1px_03.png"));

var _TrFooter = _interopRequireDefault(require("@a/images/Trainning/TrFooter.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .con{\n        /* width:1300px;\n        margin:0 auto; */\n\n        header {\n            height: 96px;\n            line-height: 96px;\n            text-align: center;\n            font-size: 30px;\n            background-color: #eeeeee;\n        }\n        nav{\n            width:1300px;\n            margin:0 auto;\n            height:60px;\n            background-color:#f5a64a;\n            display:flex;\n            ul{\n                height:60px;\n                flex:1;\n                display:flex;\n                justify-content:space-around;\n                align-items: center;\n                li{\n                    height:60px;\n                    line-height:60px;\n                    font-size:20px;\n                    img{\n                        height:20px;\n                        width:20px;\n                        margin-right:15px;\n                        display:inline-block;\n                    }\n                }\n            }\n        }\n\n        .train{\n            height:295px;\n            width:1300px;\n            margin:0 auto;\n            text-align:center;\n            padding-top:105px;\n            h2{\n                height:24px;\n                line-height:24px;\n                font-size:24px;\n                padding-bottom:40px;\n            }\n            h3{\n                height:36px;\n                line-height:36px;\n                font-size:30px;\n                font-family:Segoe Print;\n            }\n        }\n\n        .banner{\n            background:url(", ");\n            .banCon{\n                height:810px;\n                max-width:1300px;\n                margin:0 auto;\n                background:url(", ") no-repeat;\n                background-size:100%;\n                display:flex;\n                flex-direction:column;\n                justify-content:space-between;\n                div{\n                    padding:72px;\n                    h2{\n                        height:40px;\n                        line-height:40px;\n                        font-size:40px;\n                    }\n                    h3{\n                        height:30px;\n                        line-height:30px;\n                        font-size:30px;\n                    }\n                }\n            }\n        }\n        \n        .news{\n            height:790px;\n            width:1300px;\n            margin:0 auto;\n            padding-top:20px;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-around;\n            dl{\n                display:flex;\n                padding:20px;\n                font-size:24px;\n                dt{\n                    padding-left:75px;\n                }\n            }\n        }\n\n        .advisory{\n            height:775px;\n            width:1300px;\n            margin:0 auto;\n            border:1px solid #eaeaec;\n            margin-bottom:35px;\n            background-color:#faf6f5;\n            .adHead{\n                height:65px;\n                line-height:65px;\n                background-color:#f5a64a;\n                h2{\n                    margin-left:57px;\n                    font-size:28px;\n                    background-color:#faf6f5;\n                    display: inline;\n                    padding:5px 30px 15px;\n                }\n            }\n            .adMain{\n                display:flex;\n                justify-content:space-around;\n                padding-top:95px;\n                div{\n                    height:54px;\n                    line-height:54px;\n                    font-size:24px;\n                    i{\n                        padding-right:35px;\n                        color:#f5a64a;\n                    }\n                }\n            }\n        }\n        footer{\n            height: 546px;\n            /* background-color:#eeeeee; */\n            background:url(", ") no-repeat;\n            background-size:100%\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _banBg1px_["default"], _navBg_["default"], _TrFooter["default"]);

exports.Container = Container;
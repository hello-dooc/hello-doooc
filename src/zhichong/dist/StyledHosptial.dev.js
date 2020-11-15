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
  var data = _taggedTemplateLiteral(["\n    .con{\n        nav{\n            width:1300px;\n            margin:0 auto;\n            height:60px;\n        }\n\n        .train{\n            height:295px;\n            width:1300px;\n            margin:0 auto;\n            text-align:center;\n            padding-top:105px;\n            h2{\n                height:24px;\n                line-height:24px;\n                font-size:24px;\n                padding-bottom:40px;\n            }\n            h3{\n                height:36px;\n                line-height:36px;\n                font-size:30px;\n                font-family:Segoe Print;\n            }\n        }\n\n        .banner{\n           img{\n               margin:0 auto\n           }\n        }\n\n       /*  .box {\n            width:600px;\n            height:450px;\n            margin:0 auto;\n            overflow:hidden;\n            div{\n                width:10%;\n                float:left;\n                transition:all 1s;\n                img{\n                    cursor:pointer;\n                }\n                &:hover{\n                    width:55%;\n                }\n            }\n            &:hover{\n                div{\n                    width:5%;\n                }\n            }\n        } */\n        .box{\n            box-sizing: content-box;\n            width: 1300px;\n            height: 740px;\n            border:1px solid black;\n            overflow:hidden;\n            margin: 50px auto;\n            &:hover{\n                .item{\n                    width:5%;\n                }\n            }\n            .item{\n                box-sizing: border-box;\n                width: 10%;\n                float:left;\n                transition:all 1s;\n                &:hover{\n                    width:55%;\n                }\n            }\n            img{\n                width: 877px;\n                height: 738px;\n            }\n        }\n\n        .anli{\n            margin: 0 auto;\n            width:1300px;\n            height:230px;\n            img{\n                width:100%;\n                height:100%;\n            }\n        }\n        .anli_content{\n            height:433px;\n            background:#f8f8f8;\n            padding:40px;\n            .content_box{\n                margin:0 auto;\n                width:1202px;\n                height:348px;\n                background:#fff;\n                display:flex;\n                justify-content:space-around;\n                align-items:center;\n                img{\n                    display:block;\n                    width:230px;\n                    height:220px;\n                }\n            }\n        }\n\n        .bottom{\n            margin:0 auto;\n            width:1300px;\n            height:442px;\n            display:flex;\n            justify-content:space-around;\n            align-items:center;\n            dl{\n                width:217px;\n                height:275px;\n                dd{\n                    width:219px;\n                    height:152px;\n                    margin-bottom:28px;\n                }\n            }\n        }\n\n        .news{\n            height:790px;\n            width:1300px;\n            margin:0 auto;\n            padding-top:20px;\n            display:flex;\n            flex-direction:column;\n            justify-content:space-around;\n            dl{\n                display:flex;\n                padding:20px;\n                font-size:24px;\n                dt{\n                    padding-left:75px;\n                }\n            }\n        }\n\n        .advisory{\n            height:775px;\n            width:1300px;\n            margin:0 auto;\n            border:1px solid #eaeaec;\n            margin-bottom:35px;\n            background-color:#faf6f5;\n            .adHead{\n                height:65px;\n                line-height:65px;\n                background-color:#f5a64a;\n                h2{\n                    margin-left:57px;\n                    font-size:28px;\n                    background-color:#faf6f5;\n                    display: inline;\n                    padding:5px 30px 15px;\n                }\n            }\n            .adMain{\n                display:flex;\n                justify-content:space-around;\n                padding-top:95px;\n                div{\n                    height:54px;\n                    line-height:54px;\n                    font-size:24px;\n                    i{\n                        padding-right:35px;\n                        color:#f5a64a;\n                    }\n                }\n            }\n        }\n        #link{\n            background:url(", ") no-repeat;\n            /* background-size:100% */\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _TrFooter["default"]);

exports.Container = Container;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelevantWrap = exports.HeaderNoBgWrap = exports.HeaderWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    .relevant{\n        background-color:#f5a64a;\n        width:100%;\n        height:60px;\n        .centerWrap{\n            width:1308px;\n            height:60px;\n            margin:0 auto;\n            position:relative;\n            .r-left{\n                ul{\n                    padding-left:9px;\n                    li{\n                        img{\n                            float:left;\n                            margin-right:18px;\n                        }\n                        float:left;\n                        font-size:26px;\n                        line-height:26px;\n                        padding-top:20px;\n                        padding-right:33px;\n                    }\n                }\n            }\n            .r-center{\n                position:absolute;\n                left:543px;\n                top:-107px;\n            }\n            .r-right{\n                ul{\n                    padding-right:9px;\n                    float:right;\n                    li{\n                        float:left;\n                        font-size:26px;\n                        line-height:26px;\n                        padding-top:20px;\n                        padding-left:33px;\n                        img{\n                            float:left;\n                            padding-right:18px;\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" \n    width:1300px;\n    height:94px; \n    margin:0 auto;\n    >ul{\n        float:left;\n        margin-right:214px;\n        padding-top:30px;  \n        li{\n            float:left;\n            margin-left:80px;\n            font-family:MicrosoftYaHei;\n            font-size:30px;\n            color:#686868;\n            &:hover{\n                color:#f5a64a;\n            }\n        }\n    }\n    .logo{\n        float:left;\n        width:204px;\n        height:8px;\n        padding-top:29px;\n    }\n    >div:last-child{\n        float:right;\n        width:89px;\n        height:49px;\n        padding-top:27px;\n        >div:first-child{\n            width:49px;\n            float:left;\n        }\n        >div:last-child{\n            line-height:49px;\n            float:right;\n            position: relative;\n            .iconfont{\n                color:#a5a5a5;\n                font-size: 24px;\n            }\n            .dpNone{\n                display:none;\n            }\n            .dpBlock{\n                display:block;\n            }\n            >ul{\n                width:85px;\n                height:126px;\n                position: absolute;\n                right:7px;\n                top:64px;\n                li{\n                    font-size:20px;\n                    line-height:35px;\n                    color:#a5a5a5;\n                    &:hover{\n                        color:#f5a64a;\n                        border-bottom:1px solid #f5a64a;\n                    }\n                }\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background:", "\n    url(", ")no-repeat center top;\n    width: 100%;\n    height: ", ";\n    >div{\n        width:1300px;\n        margin:0 auto;\n        >ul{\n            float:left;\n            margin-right:214px;\n            padding-top:30px;  \n            li{\n                float:left;\n                margin-left:80px;\n                font-family:MicrosoftYaHei;\n                font-size:30px;\n                color:", ";\n            }\n        }\n       .logo{\n            float:left;\n            width:204px;\n            height:8px;\n            padding-top:29px;\n        }\n        >div:last-child{\n            float:right;\n            width:89px;\n            height:49px;\n            padding-top:27px;\n            >div:first-child{\n                width:49px;\n                float:left;\n            }\n            >div:last-child{\n                line-height:49px;\n                float:right;\n                position: relative;\n                .iconfont{\n                    color:#a5a5a5;\n                    font-size: 24px;\n                }\n                .dpNone{\n                    display:none;\n                }\n                .dpBlock{\n                    display:block;\n                }\n                >ul{\n                    width:85px;\n                    height:126px;\n                    position: absolute;\n                    right:7px;\n                    top:64px;\n                    li{\n                        font-size:20px;\n                        line-height:35px;\n                        color:#a5a5a5;\n                        &:hover{\n                            color:#f5a64a;\n                            border-bottom:1px solid #f5a64a;\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import banner from '../../assets/images/banner_dog.png'
// import banner from '@a/images/banner.jpeg'
var HeaderWrap = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.bg.charAt(0) === "#" ? props.bg : '';
}, function (props) {
  return props.bg;
}, function (props) {
  return props.ht;
}, function (props) {
  return props.color;
});

exports.HeaderWrap = HeaderWrap;

var HeaderNoBgWrap = _styledComponents["default"].div(_templateObject2());

exports.HeaderNoBgWrap = HeaderNoBgWrap;

var RelevantWrap = _styledComponents["default"].div(_templateObject3());

exports.RelevantWrap = RelevantWrap;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BuySearchWrap = exports.AllGoodsWrap = exports.BuyBannerWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bg = _interopRequireDefault(require("@a/images/buyhome/bg.png"));

var _scbg = _interopRequireDefault(require("@a/images/buyhome/scbg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n .nav_box{\n    position:absolute;\n    z-index:2;\n    top:93px;\n    left:50%;\n    margin-left:-650px;\n    height:108px;\n    width:1301px;\n    background-color:rgba(233,240,248,.3);\n    .search_box{\n        display:flex;\n        height:68px;\n        .search{\n            display:flex;\n            width:370px;\n            height:43px;\n            background-color:rgba(233,240,248,.6);\n            margin-top:25px;\n            margin-left:436px;\n            justify-content:center;\n            align-items:center;\n            padding-left:5px;\n            span{\n                width:321px;\n                height:100%;\n                line-height:43px;\n                font-size:12px;\n            }\n            p {\n                width:48px;\n                height:43px;\n                background:#f5a64a;\n                text-align:center;\n                padding-top:7px;\n                margin-block-end: 0;\n                svg{\n                    width:24px;\n                    height:24px;\n                }\n            }\n        }\n        .car{\n            display:flex;\n            width:114px;\n            height:43px;\n            background:#f5a64a;\n            margin-top:25px;\n            margin-left:298px;\n            border-radius:4px;\n            p{\n                width:44px;\n                height:43px;\n                background-color:#d4d2d2;\n                text-align:center;\n                padding-top:5px;\n                border-radius:4px;\n                svg{\n                    width:28px;\n                    height:28px;\n                }\n            }\n            span{\n                width:69px;\n                border-radius:0 4px px 0;\n                border-left:1px solid #fff;\n                text-align:center;\n                line-height:43px;\n                font-size:12px;\n            }\n        }\n    }\n    .menu_box{\n        height:34px;\n        width:100%;\n        .menu{\n            height:34px;\n            li {\n                float: left;\n                color:#000;\n                cursor: pointer;\n                -webkit-transition: all .3s;\n                transition: all .3s;\n                position: relative;\n                width:160px;\n                height:34px;\n                font-size:18px;\n                /*  */line-height:34px;\n                display:flex;\n                justify-content:center;\n                margin-right:98px;\n                &:hover{\n                    ul{\n                        display:block;\n                    }\n                    em{\n                        width: 0;   \n                        height: 0;  \n                        border-left: 10px solid transparent;\n                        border-right: 10px solid transparent;\n                        border-top: 10px solid #217AFF;\n                    }\n                    li{\n                        background-color:rgba(247,251,251,.7);\n                        font-size:14px;\n                        img{\n                            display:block;\n                            width:16px;\n                            height:16px;\n                            margin-top:9px;\n                            margin-right:4px;\n                        }\n                        &:hover{\n                            background-color:#f5a64a;\n                            color:#fff;\n                        }\n                    }\n                }\n                ul{\n                    position: absolute;\n                    top: 100%;\n                    left: 0%;\n                    width:160px;\n                    height:34px;\n                    display: none;\n                    z-index: 1;\n                    background-color: rgba(247,251,251,.7)\n                    li{\n                        width: 100%;\n                        &:hover{\n                            background-color:#f5a64a;\n                        }\n                    }\n                }\n            }\n            .has-submenu{\n                /* background:pink; */\n                em{\n                    display:block;\n                    width: 0;   \n                    height: 0;  \n                    border-left: 10px solid transparent;\n                    border-right: 10px solid transparent;\n                    border-bottom: 10px solid #217AFF;\n                }\n            }\n        }\n        \n        \n    }\n    \n\n\n}\n\n \n "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    span{\n        margin-bottom:0;\n    }\n    min-height:1851px;\n    background:url(", ");\n    .foodbox{\n        width:1301px;\n        margin:0 auto;\n    }\n    .pets-title{\n        padding-top:138px;\n        span{\n            display:flex;\n            justify-content:center;\n            align-items: center;\n            font-size:39px;\n            font-weight:bold;\n            color:#7b7b7a;\n            img{\n                height:43px;\n                width:57px;\n            }\n        }\n        p{\n            text-align:center;\n            font-size:18px;\n            color:#868686;\n            margin-bottom:31px;\n        }\n    }\n    .pet-food{\n        min-height:273px;\n        width:1301px;\n        margin:0 auto;\n        display:flex;\n        justify-content:space-between; \n        .img-box{\n            height:271px;\n            width:232px;\n            border:1px solid #f5a64a;\n            position:relative;\n            &:hover{\n                span{\n                    opacity:1;\n                } \n            }\n            img{\n                display:block;\n                width:100%;\n                height:100%;\n            }\n            span{\n                position:absolute;\n                bottom:0;\n                display:block;\n                width:232px;\n                height:30px;\n                text-align:center;\n                line-height:30px;\n                font-size:16px;\n                background:rgba(178,178,178,0.6);\n                opacity:0;\n                transition: all 1s;\n                -webkit-transition:all 1s;\n            }\n        }\n    }\n    .commodilies{\n        width:1301px;\n        margin:0 auto;\n        .pets-title{\n            padding-top:126px;\n            p{\n                margin-bottom:48px;\n            }\n        }\n    }\n    .pet-commodilies{\n        min-height:336px;\n        display:flex;\n        justify-content:space-between;\n        .img-box{\n            width:300px;\n            height:336px;\n            background:#fff;\n            h1{\n                width:300px;\n                height:38px;\n                font-size:15px;\n                line-height:18px;\n                word-break:break-all;\n                margin-bottom:0;\n            }\n            span{\n                display:block;\n                font-size:15px;\n                line-height:15px;\n                color:#fd4671;\n                font-weight:bold;\n            }\n            p{\n                margin-bottom:0;\n                width:300px;\n                padding-top:7px;\n                font-size:14px;\n                line-height:14px;\n                color:#b0b0b0;\n                text-align:right;\n            }\n        }\n        .topimg{\n            width:300px;\n            height:252px;\n            background:#d4d2d2;\n            padding:0 20px;\n            margin-bottom:13px;\n            img{\n                display:flex;\n                width:100%;\n                height:100%;\n            }\n        }\n    }\n\n    .marketbox{\n        width:1301px;\n        margin:0 auto;\n        .pets-title{\n            padding-top:133px;\n            p{\n                margin-bottom:10px;\n            }\n        }\n        .hot{\n            margin-bottom:26px;\n            width:1301px;\n            height:34px;\n            span{\n                display:block;\n                height:34px;\n                padding-left:16px;\n                font-size:34px;\n                line-height:34px;\n                font-style:italic;\n                float:left;\n            }\n            img{\n                display:block;\n                width:24px;\n                height:28px; \n                float:left;\n                margin-left:14px;\n            }\n        }\n    }\n        .pet-market{\n            min-height:369px;\n            width:1301px;\n            margin:0 auto;\n            display:flex;\n            justify-content:space-between;\n            .imgbox{\n                height:369px;\n                width:282px;\n                background:#fff;\n                box-shadow:0 10px 30px #888888;\n                .topimg{\n                    width:282px;\n                    height:294px;\n                    padding:16px;\n                }\n                img{\n                    display:block;\n                    width:100%;\n                    height:100%;\n                }\n                h1{\n                    text-align:center;\n                    font-size:30px;\n                }\n                span{\n                    display:block;\n                    width:84px;\n                    height:22px;\n                    background:#f5a64a;\n                    border-radius:5px;\n                    text-align:center;\n                    line-height:22px;\n                    font-size:18px;\n                    margin-left:100px;\n                }\n            }\n        }\n\n\n\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    footer{\n        /* height:730px; */\n        height:640px;\n        width:100%;\n        background:url(", ");\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height:525px;\n    width:100%;  \n    position:relative;\n    p{\n        margin-block-end: 0;\n    }\n    .banner_box {\n        position:absolute;\n        z-index:1;\n        height:525px;\n        background-color:pink;\n        img {\n            display:block;\n            height:100%;\n            width:100%;\n            }\n        }\n    \n        header {\n            position:absolute;\n            z-index:2;\n            height:93px;\n            width:100%;\n            background-color:rgba(234,237,238,.6);\n        }\n\n        \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BuyBannerWrap = _styledComponents["default"].div(_templateObject());

exports.BuyBannerWrap = BuyBannerWrap;

var Container = _styledComponents["default"].div(_templateObject2(), _scbg["default"]);

exports.Container = Container;

var AllGoodsWrap = _styledComponents["default"].div(_templateObject3(), _bg["default"]);

exports.AllGoodsWrap = AllGoodsWrap;

var BuySearchWrap = _styledComponents["default"].div(_templateObject4());

exports.BuySearchWrap = BuySearchWrap;
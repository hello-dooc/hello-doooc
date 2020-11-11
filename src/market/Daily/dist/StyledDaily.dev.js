"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _best = _interopRequireDefault(require("@a/images/best.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .nav{\n        width:1300px;\n        margin:0 auto;\n        .ant-breadcrumb{\n            height:43px;\n            line-height:43px;\n        }\n        .classification{\n            li{\n                height:38px;\n                line-height:38px;\n                background-color:#f5a64a;\n                display:flex;\n                padding-left:16px;\n                span{\n                    padding-left:20px;\n                }\n            }\n            li:nth-child(even){\n                background-color:#fdc98c;\n            }\n        }\n        .priceSort{\n            height:57px;\n            margin-top:10px;\n            background-color:#fdc98c;\n            line-height:57px;\n            display:flex;\n            padding-left:16px;\n            li{\n                padding-left:20px;\n            }\n        }\n    }\n    .goods{\n        width:1300px;\n        margin:0 auto;\n        .goodsList{\n            /* height:1047px; */\n            min-height:330px;\n            display:flex;\n            flex-wrap:wrap;\n            justify-content:start; \n            column-count:5;\n            column-gap:50px;\n            align-content:space-between; \n            .oneGood{\n                margin-bottom:30px;\n                height:330px;\n                width:220px;\n                padding-top:20px;\n                background-color:#eee;\n                /* border:1px solid #eeeeee; */\n                display:flex;\n                flex-direction:column;\n                justify-content:space-around;\n                img{\n                    height:151px;\n                    width:161px;\n                    margin:0 auto;\n                }\n                div{\n                    width:185px;\n                    margin:0 auto;\n                    display:flex;\n                    font-size:12px;\n                    color:#ccc;\n                    justify-content:space-between;\n                    h2{\n                        height:16px;\n                        line-height:16px;\n                        font-size:12px;\n                        background-color:#ff3366;\n                        color:#fff;\n                        padding:0 3px;\n                        /* width:60px; */\n                        /* padding:0 3px; */\n                    }\n                    /* .hasWidth{\n                        width:60px!important;  \n                    } */\n                    h3{\n                        font-size:12px;\n                        color:#ff3366;\n                        font-weight:600;\n                    }\n                    p{\n                        /* flex:1; */\n                        /* width:115px; */\n                        height:34px;\n                        overflow:hidden;\n                        text-overflow: ellipsis;\n                        /* white-space:nowrap; */\n                        display: -webkit-box;\n                        -webkit-line-clamp: 2;\n                        -webkit-box-orient: vertical;\n                    }\n                }\n            }\n        }\n        .ant-pagination{\n            height:94px;\n            display:flex;\n            justify-content:flex-end;\n            align-items:center;\n        }\n    }\n    #link{\n        background:url(", ") no-repeat;\n        /* background-size:100% */\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), _best["default"]);

exports.Container = Container;
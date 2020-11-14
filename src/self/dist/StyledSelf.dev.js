"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInfoWrap = exports.SelfInfoWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _footer_banner_ = _interopRequireDefault(require("@a/images/footer_banner_03.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:600px;\n    margin:0 auto;\n    /* margin:40px 0 0 122px; */\n    font-size:24px;\n    color:#595959;\n    >label{\n        display:block;\n        margin-bottom:40px;\n        >span{\n            display:inline-block;\n            width:104px;\n            text-align:right;\n            margin-right:20px;\n        }\n        >button{\n            margin-left:10px;\n        }\n        >input{\n            display:inline-block;\n            width:300px;\n            border:1px solid #ccc;\n            padding-left:10px;\n        }\n    }\n    >div{\n        width:310px;\n        margin:0 auto;\n        >button{\n            &:first-child{\n                margin-right:40px;\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .self-wrap{\n        width:864px;\n        margin:72px 0 0 217px;\n        height:638px;\n        .ant-upload-select{\n            margin-left:50%;\n        }\n        .ant-form{\n            margin-left:145px\n        }\n    }\n    #link{\n        background:url(", ") no-repeat;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelfInfoWrap = _styledComponents["default"].div(_templateObject(), _footer_banner_["default"]);

exports.SelfInfoWrap = SelfInfoWrap;

var UserInfoWrap = _styledComponents["default"].form(_templateObject2());

exports.UserInfoWrap = UserInfoWrap;
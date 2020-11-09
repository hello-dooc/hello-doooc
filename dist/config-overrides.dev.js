"use strict";

var path = require('path');

var _require = require('customize-cra'),
    override = _require.override,
    addWebpackResolve = _require.addWebpackResolve,
    addWebpackAlias = _require.addWebpackAlias,
    addDecoratorsLegacy = _require.addDecoratorsLegacy;

module.exports = override( // resolve
addWebpackResolve({
  extensions: [".js", ".json", ".jsx"]
}), // 给文件夹起别名
addWebpackAlias({
  "@": path.resolve(__dirname, 'src/'),
  "@a": path.resolve(__dirname, 'src/assets'),
  "@c": path.resolve(__dirname, 'src/components'),
  "@u": path.resolve(__dirname, 'src/utils')
}), addDecoratorsLegacy());
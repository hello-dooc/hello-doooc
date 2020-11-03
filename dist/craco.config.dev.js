"use strict";

var path = require('path');

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@c": path.resolve(__dirname, 'src/components'),
      "@s": path.resolve(__dirname, 'src/self'),
      "@a": path.resolve(__dirname, 'src/assets'),
      "@u": path.resolve(__dirname, 'src/utils')
    }
  }
};
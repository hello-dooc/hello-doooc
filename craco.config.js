//在craco.config,.js里加上
const path = require('path');
module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname,'src/'),
      "@a":path.resolve(__dirname,'src/assets'),
      "@c":path.resolve(__dirname,'src/components'),
      "@s":path.resolve(__dirname,'src/self')
    }
  },
}
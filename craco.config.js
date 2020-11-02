//在craco.config,.js里加上
const path = require('path');
module.exports = {
  babel: {   //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  },
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname,'src/'),
      "@a":path.resolve(__dirname,'src/assets'),
      "@c":path.resolve(__dirname,'src/components'),
      "@s":path.resolve(__dirname,'src/self'),
      "@d":path.resolve(__dirname,'src/address'),
      "@u":path.resolve(__dirname,'src/utils'),
      "@m":path.resolve(__dirname,'src/market')
    }
  },
}
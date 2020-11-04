const path = require('path');
module.exports = {
  babel: {   //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  },
  webpack: {
    // 别名
    alias: {
      "@": path.resolve(__dirname,'src/'),
      "@h": path.resolve(__dirname,'src/home'),
      "@c":path.resolve(__dirname,'src/components'),
      "@s":path.resolve(__dirname,'src/self'),
      "@a":path.resolve(__dirname, 'src/assets'),
      "@d":path.resolve(__dirname,'src/address'),
      "@m":path.resolve(__dirname,'src/market'),
      "@z":path.resolve(__dirname,'src/zhichong'),
      "@u":path.resolve(__dirname,'src/utils'),
      "@sc":path.resolve(__dirname,'src/shoppingCart'),
      "@b":path.resolve(__dirname,'src/buyhome'),
   },
  }  
}
      

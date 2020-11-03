/* craco.config.js */
const path = require('path');
module.exports = {
   webpack:{
     alias:{
       "@": path.resolve(__dirname,'src/'),
       "@a":path.resolve(__dirname,'src/assets'),
       "@c":path.resolve(__dirname,'src/components'),
       "@s":path.resolve(__dirname,'src/self')
     }
   },
//    babel: {   //用来支持装饰器
//     plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
//  },
    


  };


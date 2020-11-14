const path = require('path')
const {
    override,
    fixBabelImports,
    addWebpackResolve,
    addWebpackAlias,
    addDecoratorsLegacy
}=require('customize-cra')

module.exports=override(
    //按需加载
    fixBabelImports('import',{
        libraryName:'antd',
        style:'css'
    }),
    addWebpackResolve({
        extensions:['.js','.json','.jsx']
    }),
    addDecoratorsLegacy(), //装饰器
    // 给文件夹起别名
    addWebpackAlias({
        "@":path.resolve(__dirname,'src/'),
        "@a":path.resolve(__dirname,'src/assets'),
        "@c":path.resolve(__dirname,'src/components'),
        "@s":path.resolve(__dirname,'src/self'),
        "@u":path.resolve(__dirname,'src/utils'),
    }),
)
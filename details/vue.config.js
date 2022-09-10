
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: `http://localhost:3000`, //API服务器的地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "", //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        },
      },
    },
  },


  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },


};
// module.exports = {
//   configureWebpack: {
//     externals: {
//       'vue': 'Vue',
//       'element-ui': 'ELEMENT'
//     }
//   }
// }

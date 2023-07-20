const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath:' '
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        ws:true,
        changeOrigin:true
      }
    }
  }
})

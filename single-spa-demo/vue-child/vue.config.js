const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'http://localhost:4000',
  devServer:{
    port: 4000
  },
  // app-errors.js:12 Uncaught TypeError: application '@demo/vue-child' died in status LOADING_SOURCE_CODE: Cannot read properties of undefined (reading 'meta')
  chainWebpack: (config) => {
    if(config.plugins.has('SystemJSPublicPathWebpackPlugin')){
      config.plugins.delete('SystemJSPublicPathWebpackPlugin') 
    }
  }
})

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

configureWebpack: config => {
  const plugins = []
  plugins.push(new NodePolyfillPlugin())
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = defineConfig({
//   devServer: {
//     before: require('./mock/index.js')
//   }
// })

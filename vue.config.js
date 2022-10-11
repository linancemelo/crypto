const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 跨域的目標路徑 https://api.binance.com/api/v3/ticker/24hr?symbol=BTC
        target: 'https://api.binance.com/api',
        // 允許跨域
        changOrigin: true,
        // 重寫路徑是把前面的 /api 更換為 空字符串
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/crypto/'
    : './'
}

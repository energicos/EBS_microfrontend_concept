console.log('zzz');

module.exports = {
  devServer: {
    proxy: {
      '/contacts': {
        target: 'http://127.0.0.1:3001/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}

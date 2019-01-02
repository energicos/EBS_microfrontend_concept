module.exports = {
  devServer: {
    proxy: {
      '/contacts-app': {
        target: 'http://127.0.0.1:3002/',
        ws: true,
        changeOrigin: true
      },
      '/settings-app': {
        target: 'http://127.0.0.1:3003/',
        ws: true,
        changeOrigin: true
      },
      '/tam-app': {
        target: 'http://127.0.0.1:3004/',
        ws: true,
        changeOrigin: true
      },
      '/pod-app': {
        target: 'http://127.0.0.1:3005/',
        ws: true,
        changeOrigin: true
      },
      '/organization-app': {
        target: 'http://127.0.0.1:3006/',
        ws: true,
        changeOrigin: true
      },
      '/building-app': {
        target: 'http://127.0.0.1:3007/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}

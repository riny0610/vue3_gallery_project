module.exports = {
  devServer: {
    proxy: {
      // api로 호출시 우회하도록 추가
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}
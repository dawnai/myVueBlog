module.exports = {
  transpileDependencies: ['element-ui'],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.replicate.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/v1', // 重写请求路径，将/api替换为/v1
        },
      },
    },
  },
};


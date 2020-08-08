const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use('/dmx/api', proxy.createProxyMiddleware({
  //   target: 'https://www.codedmx.top',
  //   // target: 'http://localhost:6666',
  //   changeOrigin: true,
  // }));
  app.use('/api', proxy.createProxyMiddleware({
    target: 'http://localhost:8001',
    // target: 'http://localhost:6666',
    changeOrigin: true,
  }));
};
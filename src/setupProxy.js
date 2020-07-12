const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use('/dmx/api', proxy.createProxyMiddleware({
    target: 'https://www.codedmx.top',
    // target: 'http://localhost:6666',
    changeOrigin: true,
  }));
};
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

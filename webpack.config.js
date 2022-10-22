const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var config = {
  entry: {
    main: './src/index.js',
    supporterscript: './src/SupporterScript.js',
  },
  output: {
    filename: '',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|jpeg|png|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output.filename = '[name].[hash].js';
    console.log('@@@ DEVELOPMENT IS STARTING @@@');
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[contenthash].js';
    console.log('@@@ PRODUCTION IS STARTING @@@');
  }

  return config;
};

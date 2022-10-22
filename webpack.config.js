const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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

    console.log(`
    _______________________________
    @@@ DEVELOPMENT IS STARTING @@@
    -------------------------------
    `);
  }

  if (argv.mode === 'production') {
    config.output.filename = '[name].[contenthash].js';

    console.log(`
    _______________________________
    @@@ PRODUCTION IS STARTING @@@
    -------------------------------
    `);
  }

  return config;
};

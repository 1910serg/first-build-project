const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

var config = {
  entry: {
    main: './src/index.js',
    supporterscript: './src/SupporterScript.js',
  },
  output: {
    filename: null,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
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
    hot: null,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: null,
              reloadAll: true,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(svg|jpeg|png|gif)$/,
        use: ['file-loader'],
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
    config.module.rules[0].use[0].options.hmr = true;
    config.devServer.hot = true;
    config.plugins.push(
      new HTMLWebpackPlugin({
        template: './public/index.html',
        minify: {
          collapseWhitespace: false,
        },
      })
    );

    console.log(`
    _______________________________
    @@@ DEVELOPMENT IS STARTING @@@
    -------------------------------
    `);
  }

  if (argv.mode === 'production') {
    (config.optimization.minimizer = [
      new OptimizeCssWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]),
      (config.output.filename = '[name].[contenthash].js');
    config.module.rules[0].use[0].options.hmr = false;
    config.devServer.hot = false;
    config.plugins.push(
      new HTMLWebpackPlugin({
        template: './public/index.html',
        minify: {
          collapseWhitespace: true,
        },
      })
    );

    console.log(`
    _______________________________
    @@@ PRODUCTION IS STARTING @@@
    -------------------------------
    `);
  }

  return config;
};

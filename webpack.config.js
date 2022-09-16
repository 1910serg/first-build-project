const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        supporterscript: './src/SupporterScript.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    }
}
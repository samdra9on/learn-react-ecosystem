const path = require("path");
const webpack = require('webpack');
var isProduction = process.env.NODE_ENV == 'production';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Ignore module with webpack'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    })
];

if (isProduction) {
    plugins.push(
        new webpack.IgnorePlugin(/logger/)
    );
}

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins,
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  mode: 'none',
  optimization: {
      minimize: false
  }
};

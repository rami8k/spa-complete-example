const { VueLoaderPlugin } = require("vue-loader")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

const path = require("path");

module.exports = {
  entry: {
    main: "./src/main-spa.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3002/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3002,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: 'system' },
      filename: "remoteEntry.js",
      exposes: [
        { 'view1': './src/views/View1' }
      ],
      shared: ['vue']
    })
  ]
};
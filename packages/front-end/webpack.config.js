const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "bna";
  
  return {
    entry: './src/index',
    cache: false,
  
    mode: 'development',
    devtool: 'source-map',
  
    optimization: {
      minimize: false
    },
  
    output: {
      publicPath: 'http://localhost:3000/'
    },
  
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      port: 3000
    },
  
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
  
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: require.resolve('babel-loader')
        },
        {
          test: /\.md$/,
          loader: 'raw-loader'
        }
      ]
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName
        }
      }),
    ]
  }

}
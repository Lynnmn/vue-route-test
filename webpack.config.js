var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.json', 'coffee','.vue'],
      alias: {
            'vue$': 'vue/dist/vue.js',
            'vuex$': 'vuex/dist/vuex.js',
            'vueRouter$': 'vue-router/dist/vue-router.js',
            'vueResource$': 'vue-resource/dist/vue-resource.js',
            'axios$': 'axios/dist/axios.min.js'
        }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader?presets[]=es2015'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.json/,
      loader: 'json-loader',
      include: path.join(__dirname, '.')
    },
    {
      test: /\.css/,
      loaders:['style','css'],
      include: path.join(__dirname, '.')
    },
    {
      test: /\.vue$/,
      loader:'vue',
      include: path.join(__dirname, '.')
    }]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
};

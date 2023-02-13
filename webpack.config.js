import paths from './gulp/paths';
import webpack from 'webpack';
import scriptFiles from './app/scripts/scriptFiles';
import {
  env
} from './options';

const uglifyJS = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    comparisons: false
  },
  mangle: {
    safari10: true
  },
  output: {
    comments: false,
    ascii_only: true
  },
  sourceMap: env == 'dev'
});

export default {
  entry: scriptFiles,
  output: {
    path: `${__dirname}/dist/js/`,
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: env !== 'dev' ? [uglifyJS] : [],
  performance: {
    hints: false
  }
}

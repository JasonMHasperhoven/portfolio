var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEV = process.argv.indexOf('--dev') > -1;

module.exports = {
  entry: {
    'app': './app/app.js'
  },
  context: __dirname,
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: '[name].js',
    publicPath: DEV ? '/martijnhasperhoven/assets/' : '/assets/'
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            importLoaders: 2,
            modules: true,
            localIdentName: DEV ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]',
            minimize: !DEV,
          })}`,
          'postcss-loader?pack=default',
          'sass-loader'
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', `css-loader?${JSON.stringify({
          sourceMap: DEV,
          minimize: !DEV,
        })}!postcss-loader?pack=sass!sass-loader`)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: DEV,
          babelrc: false,
          presets: [
            'latest',
            'stage-0',
            'react',
            ...DEV ? [] : [
              'react-optimize',
            ]
          ]
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: DEV ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
          limit: 10000,
        },
      }
    ]
  },
  postcss(bundler) {
    return {
      default: [
        require('postcss-cssnext')(),
      ],
      sass: [
        require('autoprefixer')(),
      ],
    };
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'app')]
  },
  resolve: {
    root: path.join(__dirname, 'app'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEV ? '"development"' : '"production"',
      'process.env.BROWSER': true,
      __DEV__: DEV,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: true
      },
      comments: false,
      mangle: true
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    })
  ],
  stats: {
    children: false,
    chunks: false,
    colors: true
  },
  watch: DEV ? true : false,
  devtool: DEV ? 'cheap-module-eval-source-map' : false
}

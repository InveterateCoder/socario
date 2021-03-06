const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const clientConfig = {
  mode: 'production',
  entry: { app: ['./src/index.jsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    chrome: 70,
                  },
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
}

const serverConfig = {
  mode: 'production',
  entry: './server/server.prod.js',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 10,
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' },
      ],
    }),
  ],
}

module.exports = [clientConfig, serverConfig]

const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
  entry: slsw.lib.entries,
  mode: 'none',
  target: 'node18',
  externals: ['pg-native'],
  node: { __dirname: true },
  resolve: { extensions: ['.js'] },
  optimization: { minimize: true },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  ignoreWarnings: [
    { module: /node_modules\/typeorm/, message: /Can't resolve/ },
    {
      module: /node_modules/,
      message:
        /Critical dependency: the request of a dependency is an expression/
    }
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /plop-templates/],
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
}

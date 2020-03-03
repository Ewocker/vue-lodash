const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    library: 'VueLodash',
    libraryTarget: 'umd',
    globalObject: 'this' // Bug https://medium.com/@JakeXiao/window-is-undefined-in-umd-library-output-for-webpack4-858af1b881df
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}
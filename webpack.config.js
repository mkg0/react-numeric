const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve("./docs/src/index.js"),
  output: {
    path: path.resolve("./docs/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"],
        include: path.resolve("./docs")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: path.join(__dirname, "docs"),
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'react-date-range',
  })],
};

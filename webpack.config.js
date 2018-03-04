const path = require("path");

module.exports = {
  entry: path.resolve("./demo/src/index.js"),
  output: {
    path: path.resolve("./demo/dist"),
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
        include: path.resolve("./demo")
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
    contentBase: path.join(__dirname, "demo"),
    hot: true
  }
};

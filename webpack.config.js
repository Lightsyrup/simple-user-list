const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV = "development";

const config = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    // 打包文件根目录
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // publicPath: "/src/build/" //公共路径
  },
  plugins: [
    // 生成 index.html
    new HtmlWebpackPlugin({
      filename: "index.html",
      // template: "./index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      // 两个test，保证既可以识别jsx，也可以使用less文件
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader"
      },
      {
        //
        test: /\.(le|c)ss$/,
        use: ["style-loader", "css-loader", "less-loader"],
        include: path.resolve("src"),
        exclude: /node_modules/,

      },
    ]
  },
};
if (isDev) {
  config["devServer"] = {
    port: 1000,
    host: "0.0.0.0",
    historyApiFallback: true
  };
  config["mode"] = "development";
}


module.exports = config;
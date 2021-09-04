const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


const isDev = process.env.NODE_ENV = "development";

const config = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        // 打包文件根目录
        // path: path.resolve(__dirname, "./build"),
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        // publicPath: "/src/build/" //公共路径
    },
    plugins: [
        // 生成 index.html
        new HtmlWebpackPlugin({
            filename: "index.html",
            // template: "./index.html",
            template: "./src/index.html",
            // favicon: path.resolve(__dirname, "./src/pictures/common/titlle.png")//添加标题样式
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.RUN_ENV": false
        }),

    ],
    module: {
        rules: [
            // 多个test，配置不同的内容
            {
                test: /\.(jsx|js)?$/,
                loader: "babel-loader"
            },
            {
                test: /\.(le|c)ss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        lessOptions: {
                            javascriptEnabled: true
                        }
                    }
                }
                ],
                // include: path.resolve("src"),
                // exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
};
if (isDev) {
    config["devServer"] = {
        port: 1000,
        historyApiFallback: true,
    };
    config["mode"] = "development";
}


module.exports = config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean:true
    },
    plugins: [new HtmlWebpackPlugin({
 template:'./src/template/index.html'

    })],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};


const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.[contenthash].js",
        path: path.resolve(__dirname, "build"),
        clean:true
    },
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

const { dirname } = require("path");
const path = require("path");
const {merge} =require("webpack-merge");
const common = require("./webpack.common");
module.exports =merge(common, 
{
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: false,
        port: 9000,
      },
});

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
require('dotenv').config();

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },

            },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    context: path.resolve(__dirname, "src"),
    mode: "development",
    devtool: 'none',
    entry: "./init.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    watch: false,
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ]
};

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = ({mode}) => {
    if (mode !== 'production') {
        mode = 'development';
    }
    console.log(`*********************   mode is: ${mode}   *********************`);

    return {
        mode,
        entry: "./client-side/src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            publicPath: "http://localhost:3000/dist",
            filename: "index_bundle.js"
        },
        devServer: {
            historyApiFallback: true,
            contentBase: "./client-side/public/",
            port: 3000,
            publicPath: "http://localhost:3000/dist"
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }]
        },
        resolve: { extensions: [".jsx", ".js"] },
        plugins: [
            new HtmlWebPackPlugin({
                hash: true,
                filename: "index.html",  //target html
                template: "./client-side/public/index.html" //source html
            }),
        ]
    }
};

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 8081;

module.exports = {
    mode: 'development',  
    entry: './src/index.js',
    output: {
      filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|ttf|eot|jpg|jpeg|png|gif|svg)$/i,
                // test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                // test: /\.woff|.woff2|.ttf|.eot|.jpg|.jpeg|.png|.gif|.svg*.*$/,
                // test: /\.(png|jpe?g|gif)$/i,
                // test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      }
};
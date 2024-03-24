const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: 'main.js',
    },
    devServer: {
        static: "./dist",
        port: 3001,
        hot: true
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin(), //CSS
        new HtmlWebpackPlugin({template: 'src/index.pug', filename: "index.html", title: "Development"}), //HTML
    ],
    devtool: "inline-source-map",
    module: {
        rules: [
            //CSS-правила
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        }
                    }, 
                    'css-loader']
            },
            //HTML-правила
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                    }
            }
        ]
    }
}

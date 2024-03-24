const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    performance: {
        maxEntrypointSize: 5120000,
        maxAssetSize: 5120000
   },
    output: {
        filename: 'main.js',
    },
    devServer: {
        static: "./dist",
        port: 3002,
        hot: false
    },
    mode: 'production',
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

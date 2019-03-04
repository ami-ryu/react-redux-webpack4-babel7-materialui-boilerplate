const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
            app: ['./src/index.js']
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        "style-loader", // creates style nodes from JS strings
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                },
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    loaders: ['file-loader']
                }
            ]
        }
    };

    config.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ];
    config.devtool = 'inline-source-map';

    if(options.mode === 'development') {
        console.log('dev')
        config.devServer = {
            hot: true, // 서버에서 HMR을 켠다.
            host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
            contentBase: './dist', // 개발서버의 루트 경로
            stats: {
                color: true
            }
        };
    } else {
        console.log('prod')
    }

    return config;
};
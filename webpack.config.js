const webpack = require('webpack');

/** *************************************
 ** Root path name
 ************************************** */
const ROOT_PATH_NAME = 'public';

/** *************************************
 ** JS Setting
 ************************************** */
const JS_ENTRY = {
    'js/estimatechart': ['@babel/polyfill', './src/js/index.jsx']
};
const JS_SOURCE_MAP_STYLE = 'inline-source-map'; // 'inline-source-map', 'source-map', etc.

/** *************************************
 ** devServer Setting
 ************************************** */
const PORT_NUMBER = 3000;
const DEV_SERVER = {
    contentBase: ROOT_PATH_NAME,
    publicPath: '/',
    // open: true,
    port: PORT_NUMBER,
    host: '0.0.0.0',
    watchContentBase: true,
    disableHostCheck: true
};

/** *************************************
 ** Webpack Config
 ************************************** */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let mode =
    process.argv.indexOf('production') !== -1 ? 'production' : 'development';
if (process.argv.indexOf('--watch') !== -1) mode = 'development';
const isDev = mode === 'development';

module.exports = [
    {
        devtool: 'source-map',
        entry: JS_ENTRY,
        output: {
            path: `${__dirname}/${ROOT_PATH_NAME}`,
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|public)/,
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                },
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ]
                            }
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: isDev ? JS_SOURCE_MAP_STYLE : '',
        performance: { hints: false },
        devServer: DEV_SERVER
    }
];

console.log('-------------------------------------------------------');
console.log(`mode: ${mode}`);
console.log('-------------------------------------------------------');

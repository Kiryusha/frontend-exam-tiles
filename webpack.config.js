const { join, resolve } = require('path');
const { createReadStream } = require('fs');

const webpack = require('webpack');

const HtmlPlugin = require('html-webpack-plugin');
const HtmlTemplatePlugin = require('html-webpack-template');
const VuePlugin = require('vue-loader/lib/plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
    context: __dirname,

    entry: join( __dirname, 'src/index.js' ),

    output: join( __dirname, 'public/bundle.js' ),

    resolve: {
        modules: [
            resolve('./src/'),
            resolve('./node_modules'),
        ],

        alias: {
            '@': resolve('./src/'),
        },

        extensions: ['.js', '.json', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },

            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ],
    },

    plugins: [
        new VuePlugin(),

        new HtmlPlugin({
            filename: 'index.html',
            template: HtmlTemplatePlugin,
            inject: false,
            mobile: true,
            appMountId: 'app',
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${process.env.NODE_ENV}"`,
            },
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                { path: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto+Slab&amp;subset=cyrillic', type: 'css' }
            ],
            append: true
        })
    ],

    devServer: {
        contentBase: './public/',
        hot: true,
        port: 9000,
        setup(app) {
            app.get('/api/tiles', function(req, res)  {
                res.writeHead(200, { 'Content-Type' : 'application/json' });
                createReadStream(join(process.cwd(), 'api/tiles.json'), { encoding: 'utf-8' })
                    .pipe(res);
            });
        },
    },
};

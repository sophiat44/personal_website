/**
 * @const [publicPath]
 * */
const publicPath = '/';

/**
 * @require [mini-css-extract-plugin]
 * */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @require [autoprefixer]
 * */
const autoprefixer = require('autoprefixer');

/**
 * @require [path]
 * */
const path = require('path');

let conf = {
    /**
     * @prop [entry]
     * */
    entry: './src/index.js',

    /**
     * @prop [output]
     * */
    output: {
        /**
         * @propInner [output.publicPath]
         * */
        publicPath: publicPath,

        /**
         * @propInner [output.path]
         * */
        path: path.resolve(__dirname, `./app/`),

        /**
         * @propInner [output.filename]
         * */
        filename: 'assets/js/[name].js'
    },

    /**
     * @prop [module]
     * */
    module: {
        /**
         * @propInner [module.rules]
         * */
        rules: [
            /**
             * @lang [js]
             * */
            {
                /**
                 * @propInner [rules[0].test]
                 * */
                test: /\.js$/,

                /**
                 * @propInner [rules[0].exclude]
                 * */
                // exclude: '/node_modules',

                /**
                 * @propInner [rules[0].use]
                 * */
                use: {
                    /**
                     * @propInner [use.loader]
                     * */
                    loader: "babel-loader"
                }
            },

            /**
             * @lang [scss]
             * */
            {
                /**
                 * @propInner [rules[1].test]
                 * */
                test: /\.scss$/,

                /**
                 * @propInner [rules[1].use]
                 * */
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader", options: {}},
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                }),
                                require('cssnano')()
                            ]
                        }
                    },
                    {loader: "sass-loader", options: {}}
                ]
            }
        ]
    },

    /**
     * @prop [plugins]
     * */
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
        }),
    ],

    /**
     * @prop [watch]
     * */
    watch: true,

    /**
     * @prop [watchOptions]
     * */
    watchOptions: {
        /**
         * @propInner [watchOptions.ignored]
         * */
        // ignored: '/node_modules',

        /**
         * @propInner [watchOptions.aggregateTimeout]
         * */
        // aggregateTimeout: 300,

        /**
         * @propInner [ignored]
         * */
        // poll: 1000
    }
};

/**
 * export config
 * */
module.exports = conf;

import path from "path"
import { Configuration, EnvironmentPlugin, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import "webpack-dev-server"
import { appBackgroundColorLight, appNavBackgroundColorDark } from "./src/lib/extended/theme"

const config: Configuration = {
    mode: "development",
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    }
                }, 
                { loader: '@wyw-in-js/webpack-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                use: [
                    "file-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "application.js",
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Teo Admin Dashboard',
            meta: {
                themeColorLight: {
                    name: "theme-color",
                    content: appBackgroundColorLight,
                    media: "(prefers-color-scheme: light)"
                },
                themeColorDark: {
                    name: "theme-color",
                    content: appNavBackgroundColorDark,
                    media: "(prefers-color-scheme: dark)"
                }
            }
        }),
        new MiniCssExtractPlugin({}),
        new HotModuleReplacementPlugin(),
        new EnvironmentPlugin({
            NODE_ENV: 'development',
            HOST: 'http://localhost:5800/api/'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: { index: '/' },
    },
}

export default config
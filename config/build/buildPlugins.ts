import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = ({
  paths,
  isDev,
}: Pick<BuildOptions, 'paths' | 'isDev'>): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HTMLWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
];

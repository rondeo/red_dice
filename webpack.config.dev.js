import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'client/src/index.js'),
    ],
    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client/src'),
            loaders: [
                'react-hot-loader/webpack',
                'babel-loader'
            ],
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: 'development'
}
import path from 'path';

export default {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'client/src/index.js'),
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'client/src'),
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    mode: 'development'
}
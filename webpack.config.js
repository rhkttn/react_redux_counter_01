module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: './index.js'
    },
    output: {
        path: __dirname + '/js',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    // devtool: "source-map",
    plugins: [],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                // terminar com .js
                test: /\.(js|jsx)$/,
                // não converte
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                // terminar com .js
                test: /\.css$/,
                // não converte
                exclude: /node_modules/,
                use: [
                    {  loader: 'style-loader' },
                    {  loader: 'css-loader'  },
                ],
            },
            {
                // terminar com .js
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {  loader: 'file-loader'  }
            },
        ]
    },
}
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "libpack.js",
        library: "libpack",
        libraryTarget: "umd"
    }
}
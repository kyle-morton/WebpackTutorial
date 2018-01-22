const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, //find file that matches this expression
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [ //example of an array of loaders for given expression
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
}
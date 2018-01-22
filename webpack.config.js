const path = require("path");
const ExamplePlugin = require('./Example-Plugin.js')
const webpack = require('webpack');


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.png$/, //find file that matches this expression
                use: [
                    {
                        loader: "file-loader"
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: 
                    //     {

                    //     }
                    // }
                ]
            },
            // {
            //     test: /\.css$/,
            //     use: [ //example of an array of loaders for given expression
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         }
            //     ]
            // },
            // {
            //     test: /\.jpeg$/,
            //     use: [
            //         {
            //             loader: "url-loader",
            //             options: {
            //                 limit: 10000 //file size limited to 10KB
            //             }
            //         }
                    
            //     ]
            // }
        ]
    },
    plugins: [
        new ExamplePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ContextReplacementPlugin()
    ]
    
}
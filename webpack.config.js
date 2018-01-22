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
                use: [
                    {
                        loader: "babel-loader"
                    },
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
    }
}
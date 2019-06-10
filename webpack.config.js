
var path = require('path')

var htmlWebpackPlugin=require('html-webpack-plugin')

var VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry : path.join(__dirname,'./src/main.js'),
    output : {
        path : path.join(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test:/\.scss$/,
                use : ["style-loader","css-loader","sass-loader"]
            },
            {
                test : /\.vue$/,
                use : "vue-loader"
            },
            {
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:'url-loader'
            },
            {
                test:/\.(ttf|eot|SVG|woff|woff2)$/,
                use:["url-loader"]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:'babel-loader'
                
            }
        ]
    }
}
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');


const SRC_DIR = path.resolve(__dirname,'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  devServer: {
        overlay: true,
        stats: 'errors-only',
        contentBase: './dist',
        port: 3000        
    },

    devtool: 'cheap-module-eval-source-map',
   
  entry: 

  {
    app: SRC_DIR + '/index.js',
    
  },
  
  
  module: {
  	rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
                })
            },
            // images
            { 
             test: /\.(png|svg|jpe?g|gif)$/i,
               use: [
                 {
                  loader: 'file-loader',
                  options: {            
                            name: 'assets/images/[name].[ext]',
                            outputPath: '',
                            useRelativePath: false            
                            }
                  }
                ]
            },
            // fonts
            { 
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },

            {
              test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
               use: [
                 {
                   loader: 'file-loader',
                   options: {
                               name: '[name].[ext]',
                               outputPath: 'fonts/',    // where the fonts will go
                               publicPath: '../'       // override the default path
                             }
                }
                ]
            },
                // font-awesome
            {
              test: /font-awesome\.config\.js/,
              use: [
                { loader: 'style-loader' },
                { loader: 'font-awesome-loader' }
              ]
            },
            ]},
 
  output: {
    path: DIST_DIR,
    filename: 'main.js',
    publicPath: ""
  },

  resolve: {
    modules: [SRC_DIR, "node_modules"],
    extensions: ['.js', '.css', '.scss']
  },
  plugins: [
  new ExtractTextPlugin('styles.css')
]
   
};
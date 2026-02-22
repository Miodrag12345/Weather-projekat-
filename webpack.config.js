const path = require('path');
const Dotenv= require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/script.js',
    output: {
        filename: 'script.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new Dotenv()
    ]
}
module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
const path = require("path");

    module.exports = {
      entry: path.join(__dirname, "src", "index.jsx"),
      output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
      },
      devServer: {
        contentBase: "./build"
      },
      mode: "development",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"]
              }
            }
          }
        ]
      }
    };
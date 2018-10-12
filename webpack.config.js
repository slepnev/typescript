module.exports = {
  entry: "./12_reactjs/12_reactjs.ts",
  output: {
    filename: "bundle.js"
  },
  devtool: "souece-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.reactjs.json"
        }
      }
    ]
  }
};
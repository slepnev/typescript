module.exports = {
  entry: "./11_workflows/11_workflows.ts",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.webpack.json"
        }
      }
    ]
  }
};
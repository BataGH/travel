const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__filename, "app"),
  },
  devServer: {
    watchFiles: "./app/**/*.html",
    static: path.join(__dirname, "app"),
    hot: true,
    port: 8080,
    host: "0.0.0.0",
  },
  mode: "development",
  // watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
};

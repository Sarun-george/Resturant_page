  // webpack.config.js
  import path from "node:path";
  import HtmlWebpackPlugin from "html-webpack-plugin";


  export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(import.meta.dirname, "dist"),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: "index.html",
      }), 
      new HtmlWebpackPlugin({
        template: "./src/about.html",
        filename: "about.html",
      }),
      new HtmlWebpackPlugin({
        template: "./src/menu.html",
        filename: "menu.html",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // webpack.config.js
          {
          test: /\.(png|jpg|jpeg|gif|svg)$/i, // ← add this
          type: "asset/resource",
        },
      ],
    },
  };

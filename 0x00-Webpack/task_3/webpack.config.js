const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Change mode to development
  entry: {
    header: './js/header/header.js', // Create separate entry points for header, body, and footer
    body: './js/body/body.js',
    footer: './js/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js', // Use [name] to generate filenames based on entry points
  },
  devServer: {
    port: 8564, // Set the port for the development server
    open: true, // Automatically open the browser when starting the server
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jp?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Automatically create index.html
    }),
    new CleanWebpackPlugin(), // Clean the build folder on each build
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split the modules in chunks to reduce bundle size
    },
  },
};


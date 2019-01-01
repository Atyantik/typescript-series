const path = require('path');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';
module.exports = [
  {
    entry: {
      client: './src/client.ts'
    },
    target: 'web',
    mode,
    devtool,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            compilerOptions: {
              "sourceMap": !isProduction,
            }
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0
      }
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: (chunkData) => {
        return chunkData.chunk.name === 'client' ? '[name].js': '[name].[chunkhash].js';
      },
      publicPath: '/static/',
      chunkFilename: '[chunkhash].js',
      path: path.join(__dirname, 'dist', 'public')
    }
  },
  {
    entry: './src/server.ts',
    target: 'node',
    mode,
    devtool,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist')
    },
    node: {
      __dirname: false,
      __filename: false,
    }
  }
];
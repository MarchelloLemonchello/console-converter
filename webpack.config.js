const path = require('path');

module.exports = (env) => {
  return {
    mode: env.mode ?? "production",
    entry: path.resolve(__dirname, './src', 'index.ts'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  }
}

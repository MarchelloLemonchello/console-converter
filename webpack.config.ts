import path from "node:path";
import webpack from "webpack";

type Mode = "development" | "production";

interface EnvVariables {
  mode?: Mode;
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
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
  return config;
}

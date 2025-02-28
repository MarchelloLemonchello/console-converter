const typescript = require("@rollup/plugin-typescript");
const url = require("@rollup/plugin-url");
const dts = require("rollup-plugin-dts")
const packageJson = require("./package.json")

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      url(),
    ]
  }, {
    input: "dist/types/index.d.ts",
    output: [
      {
        file: packageJson.types,
        format: "esm",
      }
    ],
    plugins: [
      dts.default()
    ]
  }
]
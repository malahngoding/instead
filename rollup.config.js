import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

const input = "src/index.ts";

const plugins = [
  peerDepsExternal(),
  postcss({
    config: {
      path: "./postcss.config.js",
    },
    extensions: [".css"],
    minimize: true,
    inject: {
      insertAt: "top",
    },
  }),
  typescript({
    typescript: require("typescript"),
  }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];

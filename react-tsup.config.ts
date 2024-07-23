import { defineConfig } from "tsup";
// @ts-ignore
import babel from "esbuild-plugin-babel";
export default defineConfig({
  entry: ["src/react/index.tsx"],
  outDir: "./dist/react",
  splitting: true,
  sourcemap: true,
  dts: true,
  bundle: true,
  format: "esm",
  treeshake: true,
  clean: true,
  metafile: true,
  external: ["react"],
  esbuildPlugins: [
    babel({
      config: {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                esmodules: true,
                node: "current",
              },
              modules: false,
            },
          ],
          ["@babel/preset-typescript"],
          ["@babel/preset-react"],
        ],
        plugins: [
          "@babel/plugin-transform-typescript",
          "@babel/plugin-transform-react-jsx",
          [
            "@babel/plugin-transform-template-literals",
            {
              loose: true,
            },
          ],
          "@babel/plugin-transform-react-inline-elements",
          "@babel/plugin-transform-react-constant-elements",
        ],
      },
    }),
  ],
});

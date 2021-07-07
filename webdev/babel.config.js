module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        debug: false,
      },
    ],
    "@babel/preset-flow",
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-jsx",
    '@babel/plugin-transform-runtime',
  ],
};
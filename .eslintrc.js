module.exports = {
  root: true,
  extends: ["@paleite"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
};

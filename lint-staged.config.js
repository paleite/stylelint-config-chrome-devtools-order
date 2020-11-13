module.exports = {
  "*.{json,md}": ["prettier --write"],
  "*.ts?(x)": [
    () => "tsc --project tsconfig.json --noEmit",
    "prettier --write",
  ],
};

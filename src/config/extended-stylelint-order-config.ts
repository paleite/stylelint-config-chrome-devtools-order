export default ({
  "empty-line-between-categories": emptyLineBetweenCategories = false,
} = {}): {
  plugins: string[];
  rules: {
    "order/properties-order": never[];
    "plugin/chrome-devtools-order": (
      | boolean
      | { "empty-line-between-categories": boolean }
    )[];
  };
} => ({
  plugins: [
    "stylelint-order",
    "stylelint-config-chrome-devtools-order/dist/plugin",
  ],
  rules: {
    "order/properties-order": [],
    "plugin/chrome-devtools-order": [
      true,
      {
        "empty-line-between-categories": emptyLineBetweenCategories,
      },
    ],
  },
});

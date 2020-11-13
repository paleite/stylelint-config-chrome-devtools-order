import chromeDevtoolsOrder from "../lib/chrome-devtools-order.json";

export default ({
  "empty-line-between-categories": emptyLineBetweenCategories = false,
} = {}): {
  emptyLineBefore: string;
  properties: string | string[];
  categoryName: string | string[];
}[] =>
  chromeDevtoolsOrder.map(([categoryName, properties]) => ({
    emptyLineBefore: emptyLineBetweenCategories ? "always" : "never",
    properties,
    categoryName,
  }));

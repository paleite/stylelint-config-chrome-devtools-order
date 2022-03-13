import chromeDevtoolsOrder from "../lib/chrome-devtools-order.json";

export default ({
  "empty-line-between-categories": emptyLineBetweenCategories = false,
} = {}): {
  emptyLineBefore: string;
  properties: string | string[];
  groupName: string | string[];
}[] =>
  chromeDevtoolsOrder.map(([groupName, properties]) => ({
    emptyLineBefore: emptyLineBetweenCategories ? "always" : "never",
    properties,
    groupName,
  }));

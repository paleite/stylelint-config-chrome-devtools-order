// Run: `yarn generate`
import { writeFileSync } from "fs";
import { join } from "path";
import { CategorizedProperties } from "./lib/PropertyNameCategories.edit";
import { generatedProperties } from "./lib/SupportedCSSProperties";
// import {} from "chrome-devtools-frontend/front_end/elements/PropertyNameCategories";
// import { generatedProperties } from "chrome-devtools-frontend/front_end/generated/SupportedCSSProperties";

type ChromeDevToolsOrder = { category: string; properties: string[] };

const expandPropertyNames = (name: string): string[] => {
  const longhands =
    generatedProperties.find((property) => property.name === name)?.longhands ??
    [];

  return [name, ...longhands];
};

const keys = Array.from(CategorizedProperties.keys());

const chromeDevToolsOrder = keys.reduce<ChromeDevToolsOrder[]>(
  (previousValue, category) => {
    const propertiesByCategory = CategorizedProperties.get(category) ?? [];
    const properties = propertiesByCategory
      .map(expandPropertyNames)
      .flat()
      .sort();

    return [...previousValue, { category, properties }];
  },
  []
);

const output = chromeDevToolsOrder
  .map(({ category, properties }) => {
    const lines = [`/** ${category} */`, ...properties];
    return lines.join("\n");
  })
  .join("\n\n");

function toStylelintOrder(order: ChromeDevToolsOrder[]): [string, string[]][] {
  return order.map<[string, string[]]>(({ category, properties }) => {
    console.log([category, properties]);
    return [category, properties];
  });
}
const stylelintOrder = toStylelintOrder(chromeDevToolsOrder);

console.log(output);
console.log(JSON.stringify(stylelintOrder));
writeFileSync(
  join(__dirname, "../src/lib/chrome-devtools-order.json"),
  JSON.stringify(stylelintOrder),
  { encoding: "utf-8" }
);
console.log(
  "\n[SUCCESS] `src/lib/chrome-devtools-order.json` has been written. ✨"
);

declare module "chrome-devtools-frontend/front_end/elements/PropertyNameCategories";

// declare module "./lib/SupportedCSSProperties" {
declare module "chrome-devtools-frontend/front_end/generated/SupportedCSSProperties" {
  type GeneratedProperty = {
    name: string;
    longhands?: string[];
  };
  const generatedProperties: GeneratedProperty[];
  export { generatedProperties };
}

declare module "stylelint-order/rules/properties-order" {
  const rule: {
    (expectation: unknown, options: unknown, context?: unknown): (
      root: unknown,
      result: unknown
    ) => void;
    primaryOptionArray: boolean;
    ruleName: string;
    messages: {
      expected: (
        first: unknown,
        second: unknown,
        categoryName: unknown
      ) => string;
      expectedEmptyLineBefore: (property: unknown) => string;
      rejectedEmptyLineBefore: (property: unknown) => string;
    };
  };

  export = rule;
}

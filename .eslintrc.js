const path = require("path");

const typescriptProjects = [
  "./tsconfig.json",
  "./tsconfig.eslint.json",
].map((p) => path.resolve(__dirname, p));

/** @type import("eslint").Linter.Config<import("eslint").Linter.RulesRecord> */
const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  noInlineConfig: true,
  env: { node: true },
  extends: [
    // Base
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended",

    // Typescript
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",

    // Last
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: typescriptProjects,
    sourceType: "module",
  },
  /**
   * The following (opinionated) rules help in finding hard-to-catch bugs
   */
  rules: {
    /**
     * Curly brackets:
     * Ensure if-statements (and the like) always have a body
     */
    curly: ["error", "all"],

    /**
     * Strict comparisons:
     * Avoid implicit type casting
     */
    eqeqeq: "error",

    /**
     * TypeScript provides equivalent checks, so we turn them off
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
     */
    "import/default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off",
  },
};

/** @type import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>[] */
const overrides = [
  {
    /**
     * Configurations in project root
     */
    files: ["./*.js"],

    env: {
      node: true,
    },

    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
];

module.exports = { ...config, overrides };

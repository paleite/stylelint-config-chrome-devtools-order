import stylelint from "stylelint";
import type { Plugin, RuleTesterContext } from "stylelint";
import type { Root, Result } from "postcss";
import propertiesOrderRule from "stylelint-order/rules/properties-order";
import configCreator from "../config/config-creator";

const ruleName = "plugin/chrome-devtools-order";
const plugin: Plugin = ((
  enabled: boolean,
  options: Record<string, boolean>,
  context: RuleTesterContext
) => (root: Root, result: Result) => {
  if (!enabled) {
    return;
  }

  const validOptions = stylelint.utils.validateOptions(
    result,
    ruleName,
    {
      actual: enabled,
      possible: [true, false],
    },
    {
      actual: options,
      optional: true,
      possible: {
        "empty-line-between-categories": [true, false],
      },
    }
  );
  if (!validOptions) {
    throw TypeError(
      `The options received for ${ruleName} are invalid: ${JSON.stringify(
        options
      )}`
    );
  }

  const expectation = configCreator(options);
  propertiesOrderRule(expectation, undefined, context)(root, result);
}) as Plugin;

export default stylelint.createPlugin(ruleName, plugin);

export { ruleName };

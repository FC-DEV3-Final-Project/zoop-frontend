require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["import"],
  rules: {
    "import/order": [
      "off",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "pathGroups": [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "newlines-between": "always",
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-no-target-blank": "off",
    "react/prop-types": "off",
  },
};

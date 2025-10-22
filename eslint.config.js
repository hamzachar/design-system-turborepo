import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".next/",
      "out/",
      "build/",
      "coverage/",
      ".turbo/",
      "storybook-static/",
    ],
  },
];

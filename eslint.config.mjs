// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
// Your custom configs here
  .override("nuxt/javascript", {
    rules: {
      eqeqeq: "error",
    },
  })
  .override("nuxt/typescript/rules", {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
    },
  });

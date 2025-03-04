// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt()
// Your custom configs here
// {
//   files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
//   rules: {
//     "eqeqeq": "error",
//     "@typescript-eslint/no-floating-promises": "error",
//   }
// }
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

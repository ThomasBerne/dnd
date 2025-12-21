import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';

export default withNuxt([
  {
    ignores: [
      '.github',
      'node_modules',
      'dist',
      'package.json',
      'package-lock.json',
      './.nuxt',
    ],
  },
  ...eslintPluginJsonc.configs['flat/all'],
  {
    rules: {
      semi: ['error', 'always'],
      'no-irregular-whitespace': 'off',
      'no-alert': 'error',
      'object-curly-spacing': ['error', 'always'],
      'linebreak-style': ['error', 'unix'],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'vue/attribute-hyphenation': [
        'error',
        'never',
        { ignore: ['camelCase'] },
      ],

      'vue/require-explicit-emits': 'error',
      'vue/valid-v-slot': 'off',
      'vue/v-on-event-hyphenation': ['error', 'never', {}],
      'vue/no-v-html': 'off',
      'vue/prop-name-casing': 'error',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-child-content': 'error',

      'jsonc/indent': ['error', 2],
      'jsonc/key-name-casing': 'off',
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ...eslintPluginBetterTailwindcss.configs.recommended,
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/assets/css/main.css',
      },
    },
    rules: {
      'better-tailwindcss/no-unknown-classes': [
        'warn',
        { ignore: ['h-.*', 'flicker-arrow'] },
      ],
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
  },
]);

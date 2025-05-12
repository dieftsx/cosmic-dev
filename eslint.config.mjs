import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Configuração base para todos os arquivos
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'public/**',
      'dist/**',
      '**/*.d.ts',
    ],
  },

  // Configuração para arquivos TypeScript/TSX
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: '.',
      },
    },
    rules: {
      // Regras para variáveis não utilizadas - relaxadas para evitar erros de build
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],

      // Regras para React
      'react/prop-types': 'off', // Desativado porque usamos TypeScript
      'react/react-in-jsx-scope': 'off', // Não é necessário importar React no Next.js
      'react/jsx-uses-react': 'off', // Não é necessário no React 17+
      'react/jsx-uses-vars': 'error', // Evita falsos positivos para variáveis JSX
      'react/no-unescaped-entities': 'warn', // Avisa sobre entidades HTML não escapadas
      'react/display-name': 'off', // Desativado para componentes anônimos

      // Regras para React Hooks
      'react-hooks/rules-of-hooks': 'error', // Verifica regras dos Hooks
      'react-hooks/exhaustive-deps': 'warn', // Verifica dependências dos efeitos

      // Regras para acessibilidade
      'jsx-a11y/alt-text': 'warn', // Exige alt em imagens
      'jsx-a11y/aria-props': 'error', // Verifica propriedades ARIA válidas
      'jsx-a11y/aria-proptypes': 'error', // Verifica valores ARIA válidos
      'jsx-a11y/aria-role': 'error', // Verifica roles ARIA válidos
      'jsx-a11y/role-has-required-aria-props': 'error', // Verifica props ARIA necessárias
      'jsx-a11y/anchor-has-content': 'warn', // Links devem ter conteúdo
      'jsx-a11y/anchor-is-valid': 'warn', // Links devem ter href válido
      'jsx-a11y/click-events-have-key-events': 'warn', // Eventos de clique devem ter eventos de teclado
      'jsx-a11y/no-static-element-interactions': 'warn', // Elementos sem semântica não devem ter interações

      // Regras específicas do Next.js
      '@next/next/no-html-link-for-pages': 'warn', // Prefira Link do Next.js
      '@next/next/no-img-element': 'warn', // Prefira Image do Next.js
      '@next/next/no-unwanted-polyfillio': 'warn', // Evita polyfills desnecessários

      // Regras gerais
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Permite console.warn e console.error
      'prefer-const': 'warn', // Prefira const quando possível
      'no-var': 'error', // Não use var
      'eqeqeq': ['warn', 'always'], // Use === em vez de ==
    },
  },

  // Configuração para arquivos JavaScript/JSX
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: '.',
      },
    },
    rules: {
      // Regras para variáveis não utilizadas
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],

      // Mesmas regras do TypeScript, mas para JavaScript
      'react/prop-types': 'warn', // Ativado para JS porque não tem tipagem
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/no-unescaped-entities': 'warn',
      'react/display-name': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',

      '@next/next/no-html-link-for-pages': 'warn',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'warn',
      'no-var': 'error',
      'eqeqeq': ['warn', 'always'],
    },
  },
];

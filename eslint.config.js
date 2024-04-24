// eslint.config.js
const antfu = require('@antfu/eslint-config').default
const safeql = require('@ts-safeql/eslint-plugin')

module.exports = antfu(
  // Configures for antfu's config
  {},
  // From the second arguments they are ESLint Flat Configs
  // Careful, antfu renames some plugins for consistency https://github.com/antfu/eslint-config?tab=readme-ov-file#plugins-renaming
  {
    files: ['apps/api/**/*.ts', 'apps/api/**/*.json'],
    ignores: [],
    plugins: { '@ts-safeql': safeql },
    rules: {
      'ts/consistent-type-imports': 'off',
      '@ts-safeql/check-sql': [
        'error',
        {
          connections: [
            {
            // The migrations path:
              databaseUrl: 'postgres://sunagenda:password@localhost:5433/sunagenda',
              // migrationsDir: './apps/api/prisma/migrations',
              targets: [
              // This makes `prisma.$queryRaw` and `prisma.$executeRaw` commands linted
                { tag: 'prisma.+($queryRaw|$executeRaw)', transform: '{type}[]' },
              ],
            },
          ],
        },
      ],
    },
    languageOptions: {
      // Required for safe-sql
      parserOptions: {
        project: 'apps/api/tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  },
)

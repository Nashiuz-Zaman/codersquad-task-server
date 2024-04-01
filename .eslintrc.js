export default {
   env: {
      browser: true,
      commonjs: true,
      es2021: true,
   },
   extends: 'eslint:recommended',
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['**/*.js'],
         parserOptions: {
            sourceType: 'module',
         },
      },
   ],
   parserOptions: {
      ecmaVersion: 'latest',
   },
   rules: {},
};

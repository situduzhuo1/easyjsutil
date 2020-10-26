// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    'semi': ['error', 'always'],
    // eslint-disable-next-line no-undef
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2],
    'eqeqeq': 'off'
  }
};

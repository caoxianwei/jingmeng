// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'no-multiple-empty-lines': 0,
    'no-useless-escape': 0,
    'camelcase': 0,
    'comma-dangle': 0,
    'spaced-comment': 0,
    'no-new': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    'indent': 0,
    'semi': 0,
    'keyword-spacing': 0,
    'prefer-promise-reject-errors': 0,
    'comma-spacing': 0,
    'space-in-parens': 0,
    'object-curly-spacing': 0,
    'import/imports-first': 0,
    'eol-last': 0
  }
}

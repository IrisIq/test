module.exports = {
  // 表示ESLint规则，将被限制在根目录下
  root: true,
  env: {
    // 表示在node环境下，启用ESLint
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    'new-cap': 0,
    camelcase: 0,
    json: 0,
    'spaced-comment': 0,
    'vue/no-deprecated-v-bind-sync': 0
  }
}

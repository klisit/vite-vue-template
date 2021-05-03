module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    //vue3允许使用template里多个根节点(https://v3.vuejs.org/guide/migration/fragments.html#_3-x-syntax)
    'vue/no-multiple-template-root': 0,
  },
}

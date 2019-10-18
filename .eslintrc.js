
module.exports = {
  root: true,
  parserOptions: {
        parser: 'babel-eslint',
        "sourceType": "module"
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
    'vue',
    // [
    //     "component",
    //     {
    //       "libraryName": "element-ui",
    //       "styleLibraryName": "theme-chalk"
    //     }
    //   ]
  ],
  env: {
      es6:true,
    browser: true,
        node: true
    },
    rules: {
        // "strict": 0,
        // "indent": ["error", 2],
        // "quotes": ["error", "double"],
        // "semi": ["error", "always"],
        // "no-console": "error",
        "arrow-parens": 0
    }
}

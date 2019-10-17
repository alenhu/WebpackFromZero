
module.exports = {
  root: true,
  // parser: 'babel-eslint',
  parserOptions: {
    "parser": "babel-eslint",
        "sourceType": "module"
  },
  plugins: ["vue"],
  extends: ["standard",'plugin:vue/recommended'],
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

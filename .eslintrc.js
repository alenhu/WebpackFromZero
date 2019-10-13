
module.exports = {
  "root": true,
  parser: 'babel-eslint',
  "parserOptions": {
        "sourceType": "module"
  },
  "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        // "strict": 0,
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "error",
        "arrow-parens": 0
    }
}

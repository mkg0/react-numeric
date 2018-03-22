module.exports = {
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier",
  ],
  plugins: [
      "react",
      "prettier",
  ],
  rules: {
  },
  parser: "babel-eslint",
  env: {
      "es6": true,
      "node": true,
      "browser": true,
      "jest": true,
    },
};
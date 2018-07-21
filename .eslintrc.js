module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['react'],
  rules: {
    curly: [2, 'multi-line'],
    'jsx-quotes': 1,
    'no-shadow': 0,
    'no-trailing-spaces': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'object-curly-spacing': [1, 'always'],
    quotes: [2, 'single', 'avoid-escape'],
    'react/jsx-boolean-value': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,
    'react/sort-prop-types': 1,
    semi: 2,
    strict: 0
  }
};

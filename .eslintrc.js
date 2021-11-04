module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
};

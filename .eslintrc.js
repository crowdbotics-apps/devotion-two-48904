const path = require('path');
module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
};

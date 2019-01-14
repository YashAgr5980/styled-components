const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
  testRegex: 'src/native/test/.*.js$',
  preset: '../../node_modules/react-native/jest/assetFileTransformer.js',
  testURL: 'http://localhost',
  testEnvironment: 'jsdom',
});

const baseConfig = require('./config.base');

module.exports = Object.assign({}, baseConfig, {
  rootDir: '../../packages/styled-components',
  testRegex: './integration-test/.*.js$',
  testURL: 'http://localhost',
});

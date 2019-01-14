module.exports = {
  testURL: 'http://localhost',
  clearMocks: true,
  roots: ['<rootDir>/src/'],
  setupFiles: ['raf/polyfill', '<rootDir>/src/test/globals.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test-utils/setupTestFramework.js',
  testPathIgnorePatterns: ['<rootDir>/src/native', '<rootDir>/src/primitives'],
};

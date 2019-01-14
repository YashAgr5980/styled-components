module.exports = {
  haste: {
    hasteImplModulePath: require.resolve('./noHaste.js'),
  },
  roots: ['<rootDir>/packages', '<rootDir>/scripts'],
  rootDir: '../../packages/styled-components' /* process.cwd(), // something better later on */,
};

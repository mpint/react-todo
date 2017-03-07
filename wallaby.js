module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      'src/**/*.js'
    ],
    tests: [
      'src/**/**/__tests__/*.js'
    ],
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node'
    }
  };
};

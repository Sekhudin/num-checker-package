module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.js', '**/*.spec.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node'
};

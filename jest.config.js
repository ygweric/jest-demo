module.exports = {
  testURL: 'http://localhost',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>/scripts/jest/setup.js',
  testEnvironment: 'node'
};

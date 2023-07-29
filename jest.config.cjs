module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageReporters: ['text-summary'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="en"></html>',
    url: 'http://localhost:5173',
  },
};

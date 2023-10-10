module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}

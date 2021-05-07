module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // jest-fetch-mock config
  automock: false,
  resetMocks: false,
  setupFiles: [
    './setupJest.js'
  ]
}

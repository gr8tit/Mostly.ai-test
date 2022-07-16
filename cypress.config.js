const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  viewportWidth: 1000,
  viewportHeight: 660,
  projectId: "93jsp2",
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500
  },
  reporter: 'junit',
  reporterOptions: {
  mochaFile: 'results/my-test-output-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: 'https://mostly.ai/'
    },
  },
});

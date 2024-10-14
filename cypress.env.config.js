const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/client/index.php",
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 740,
    viewportWidth: 360,
    setupNodeEvents(on, config) {},
  },
});

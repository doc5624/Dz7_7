const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "86sshs",
  e2e: {
    //baseUrl: "https://qamid.tmweb.ru/client/index.php",
    baseUrl: "https://petstore.swagger.io/v2",
    // retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // viewportHeight: 1920,
    // viewportWidth: 1080,
    // setupNodeEvents(on, config) {},
  },
});

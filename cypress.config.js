const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    fixturesFolder: 'cypress/fixtures'
  },
});

//This is a config files. we can override the default properties parameters and mention here like line 8
//To see default key values?--> open cypress dashboard--> choose browser--> settings--> project setting
import { defineConfig } from "cypress";
const { plugin: replayPlugin } = require("@replayio/cypress");

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // 🙋‍♂️ Add this line to install the replay plugin
      replayPlugin(on, config, {
        upload: true,
        apiKey: process.env.REPLAY_API_KEY,
      });

      return config;
    },
  },
});

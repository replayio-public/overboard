import { defineConfig } from "cypress";
import replay from "@replayio/cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // 🙋‍♂️ Add this line to install the replay plugin
      replay(on, config);
      return config;
    },
  },
});

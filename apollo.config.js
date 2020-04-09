const path = require("path");

// Load .env files
const { loadEnv } = require("vue-cli-plugin-apollo/utils/load-env");
const env = loadEnv([
  path.resolve(__dirname, ".env"),
  path.resolve(__dirname, ".env.local"),
]);

module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "http://localhost:3000/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
  service: {
    name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    localSchemaFile: path.resolve(
      __dirname,
      "./node_modules/.temp/graphql/schema.json"
    ),
  },
  engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: env.VUE_APP_APOLLO_ENGINE_KEY,
  },
};

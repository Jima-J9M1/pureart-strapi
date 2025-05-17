// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Listens on all available interfaces
  port: env.int('PORT', 1337), // Render will inject PORT
  app: {
    keys: env.array('APP_KEYS'), // Will be set in Render ENV
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
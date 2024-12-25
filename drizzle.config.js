export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DB_URL,
    connectionString: process.env.DB_CONNECTION_STRING,
  },
};
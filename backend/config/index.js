require("dotenv").config();

const REQUIRED_KEYS = ["JWT_TOKEN", "TOKEN_EXPIRATION_TIME", "DB_USERNAME", "DB_PASSWORD", "DB_NAME", "DB_HOST", "DB_PORT"];

REQUIRED_KEYS.forEach((key) => {
  if (!(key in process.env)) {
    throw new Error(`Missing required config key: ${key}`);
  }
});

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST,DB_PORT, JWT_TOKEN, TOKEN_EXPIRATION_TIME, ASSETS_UPLOAD_URL } = process.env;

module.exports = {
  JWT_TOKEN,
  TOKEN_EXPIRATION_TIME,
  ASSETS_UPLOAD_URL,

  // Sequelize config, sourced based on current NODE_ENV from models/index.js file
  [process.env.NODE_ENV || "development"]: {
    username: DB_USERNAME,
    password: DB_PASSWORD || null,
    database: DB_NAME,
    host: DB_HOST,
    port:DB_PORT,
    dialect: "mysql2",
    logging: false,
  },
};

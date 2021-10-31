const { Pool } = require("pg");
const util = require("util");
console.log(process.env.DB_USER);
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

const pool_query = util.promisify(pool.query).bind(pool);

module.exports = pool_query;

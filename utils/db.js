const { Pool } = require("pg");
const util = require("util");
const pool = new Pool({
  user: "ibrsfpixxqekcm",
  host: "ec2-35-169-204-98.compute-1.amazonaws.com",
  database: "d4alf9m85cjslp",
  password: "dfc83b5ce545ac073d1402acce404c635e709d9fef4a6cb2d43e7fb3b2f317a3",
  port: 5432,
  connectionString:
    "postgres://ibrsfpixxqekcm:dfc83b5ce545ac073d1402acce404c635e709d9fef4a6cb2d43e7fb3b2f317a3@ec2-35-169-204-98.compute-1.amazonaws.com:5432/d4alf9m85cjslp",
  ssl: {
    rejectUnauthorized: false,
  },
});

const pool_query = util.promisify(pool.query).bind(pool);

module.exports = pool_query;

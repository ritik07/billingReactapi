const { createPool } = require("mysql");

const pool = createPool({
  // port: 3306,
  host: "148.66.136.10",
  user: "TEST_ROGER",
  password: "roger1234",
  database: "ROGER_DB",
  connectionLimit: 150,
});

module.exports = pool;

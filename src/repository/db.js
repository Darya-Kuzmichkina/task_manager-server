const { Pool } = require('pg');

const pool = new Pool({
  password: 'admin',
  database: 'task_manager',
  port: 5432,
  host: 'localhost',
  user: 'postgres',
});

module.exports = pool;
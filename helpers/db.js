const Pool = require('pg').Pool;
const databaseConfig = {connectionString: process.env.elephant_sql_url}; 

const pool = new Pool(databaseConfig);

module.exports=pool;
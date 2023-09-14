const mysql = require('mysql2/promise');
const config = require('./config');

const conn =  mysql.createPool(config.db);

console.log("Create new conenction" + new Date())

async function query(query) {
  const result = await conn.query(query)
  return result
}
 
async function execute(query, values) {
  const result = await conn.query(query, [values], function(err) {
    if(err) throw err;
    conn.end()
  })
  return result
}

module.exports = {
  query, execute
}
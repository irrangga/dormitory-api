const mysql = require('mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exampledb',
  connectionLimit: 10,
  multipleStatements: true
})

pool.getConnection((err) => {
  if (err) throw err
  console.log('Connected!')
})

module.exports = pool

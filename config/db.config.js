const mysql = require('mysql');

// create mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ZeroTwo02',
  database: 'wri_evote'
});

connection.connect(function(error) {
  if (error) throw error;
  console.log('Successfully connected to the database.');
})

module.exports = connection;
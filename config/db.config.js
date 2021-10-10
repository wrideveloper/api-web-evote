require('dotenv').config()

const mysql = require('mysql');

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME
} = process.env;

// create mysql connection
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
});

connection.connect(function(error) {
    if (error) throw error;
    console.log('Successfully connected to the database.');
})

module.exports = connection;

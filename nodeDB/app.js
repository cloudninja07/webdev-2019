const mysql = require('mysql');
const faker = require('faker');

// Connect Connection
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin123',
	database: 'nodedb'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Database Connected');
});

/*
// Create Database
let q = 'CREATE DATABASE nodedb';
connection.query(q, function(err, result) {
	if (err) throw err;
	console.log('Database Created Successfully');
});
*/

/*
// Create Table
let q = 'CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))';
connection.query(q, function(err, result) {
	if (err) throw err;
	console.log('Table has been created');
});
*/

/*
// Alter Table
let q = 'AlTER TABLE customers ADD COLUMN id INT...'
*/

/*
// Insert data
let q = "INSERT INTO customers(name,email) VALUES ('John Elder','john@gmail.com')";
connection.query(q, function(err, result) {
	if (err) throw err;
	console.log('data inserted...');
});
*/

/*
// Insert Many data
let q = 'INSERT INTO customers(name,email) VALUES ?';
let data = [ [ 'akash', 'akash.this@gmail.com' ], [ 'ankita', 'ankita0562@gmail.com' ] ];
connection.query(q, [ data ], function(err, result) {
	if (err) throw err;
	console.log('data added ' + result.affectedRows);
});
*/

/*
// Inserted data through faker.js
let data = [];
for (let i = 0; i < 15; i++) {
	data.push([ faker.name.firstName(), faker.internet.email() ]);
}
let q = 'INSERT INTO customers( name , email) VALUES ?';
connection.query(q, [ data ], function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
connection.end();
*/

/*
// Select data
let q = 'SELECT * FROM customers';
connection.query(q, function(err, result) {
	if (err) throw err;
	for (let i = 0; i < result.length; i++) {
		console.log(result[i].name + ' | ' + result[i].email);
	}
});
*/

/*
// Field data
let q = 'SELECT * FROM customers';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(field);
});
*/

/*
// WHERE Clause
let q = 'SELECT * FROM customers WHERE name LIKE "a%"';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});

// WHERE Variables
let name_search = 'j%';
let id_search = 9;
let q = 'SELECT * FROM customers WHERE name LIKE ? OR id = ?';
connection.query(q, [ name_search, id_search ], function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
*/

/*
// ORDER BY
let q = 'SELECT * FROM customers ORDER BY name DESC';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
*/

/*
// Delete
let q = 'DELETE FROM customers WHERE name = "akash" OR  name = "ankita" ';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
connection.end();
*/

/*
// UPDATE
let q = 'UPDATE customers SET email = "kavon18@gmail.com" WHERE name = "kavon"';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
connection.end();
*/

/*
// LIMIT
let q = 'SELECT * FROM customers WHERE  id > 19 LIMIT 5,3';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
connection.end();
*/

/*
// DROP TABLE
let q = 'DROP TABLE IF EXISTS customers';
connection.query(q, function(err, result, field) {
	if (err) throw err;
	console.log(result);
});
connection.end();
*/

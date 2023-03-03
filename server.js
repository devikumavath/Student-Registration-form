const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// create connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'students_db'
});

// connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database.');
});

// middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// POST route to handle form submission
app.post('/', (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let password = req.body.password;

  // sanitize input
  firstName = db.escape(firstName);
  lastName = db.escape(lastName);
  email = db.escape(email);
  password = db.escape(password);

  let sql = `INSERT INTO students (firstName, lastName, email, password)
             VALUES (${firstName}, ${lastName}, ${email}, ${password})`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send('Registration successful!');
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000.');
});

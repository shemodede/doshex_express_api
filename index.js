const express = require('express');

const config = require('./config/db.config.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000;
const db = require("./models");

const mysql = require('mysql2');
const { body, validationResult } = require('express-validator');

var corsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// const database = mysql.createConnection({
//   host: 'mysqldb',
//   user: process.env.MYSQL_ROOT_USER,
//   password: process.env.MYSQL_ROOT_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   // socketPath: '/var/run/mysqld/mysqld.sock'
// });
console.log(config.PASSWORD);
const db_conn = { host: config.HOST, port: config.PORT, user: config.USER, password: config.PASSWORD }
const connection = mysql.createConnection(db_conn);
connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.DB}\`;`);

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
}).catch(err => {
  console.log(err.message);
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.get('/', (req, res) => {
  res.json({ 'response': 'Weight tracker API initialized!' });
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}.`)
})

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db_conn = { host: config.HOST, port: config.PORT, user: config.USER, password: config.PASSWORD }
const connection = mysql.createConnection(db_conn);
connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.DB}\`;`);

db.sequelize.sync().then(() => {
  console.log('Drop and Resync Db');
  initial();
}).catch(err => {
  console.log(err.message);
});


app.get('/', (req, res) => {
  res.json({ 'response': 'Weight tracker API initialized!' });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/weight.routes')(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}.`)
})

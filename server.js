const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'template',
    collection;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.render('index.ejs');
})


app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running');
})
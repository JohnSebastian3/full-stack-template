const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, 
      {useNewUrlParser: true});
    console.log(`Connected to Database: ${mongoose.connection.name}`);
  } catch(err) {
    console.log('Failed to connect', error);
  }
}

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());



app.get('/', async (req, res) => {
  try {
    // get data from database - specific collection
    // After data is found, render ejs and pass data
    // so that it can render on the page 
    res.render('index.ejs');
  } catch(err) {

  }
})


app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running');
})
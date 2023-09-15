const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500;
const cors = require('cors');
const mongoose = require('mongoose');

//Initializing middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting to MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to mongodb database');
  })
  .catch((e) => {
    console.log(e);
  });

const hotelRoutes = require('./Routes/hotels');
const userRoutes = require('./Routes/users');

app.use('/api/hotels', hotelRoutes);
app.use('/api/user', userRoutes);

//Port configure
app.listen(PORT, () => {
  console.log('Running on port 5000');
});

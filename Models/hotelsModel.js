const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  destinationValue: {
    type: Number,
    required: true,
  },
  destinationUnit: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: String,
  },
  star: {
    type: Number,
    required: true,
  },
  hotel_id: {
    type: Number,
    required: true,
  },
});

const Hotels = mongoose.model('HotelList', hotelListSchema);
module.exports = Hotels;

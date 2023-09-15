const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: String,
    required: true,
  },
  hotel_id: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  needToKnow: {
    type: Array,
    required: true,
  },
  Amenities: {
    type: Array,
    required: true,
  },
  checkinInstructions: {
    type: Array,
    required: true,
  },
  propertyRating: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});

const HotelInfo = mongoose.model('HotelInfo', hotelInfoSchema);

module.exports = HotelInfo;

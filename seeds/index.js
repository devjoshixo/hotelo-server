const mongoose = require('mongoose');
const Hotels = require('../Models/hotels');
const HotelInfo = require('../Models/hotelInfo');
const hotelInfo = require('./seedHotelData');
const hotelData = require('./seedHotels');

mongoose
  .connect(
    'mongodb+srv://admin-dev:Test123@cluster0.iemhubj.mongodb.net/hotelo?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected mongoose');
  })
  .catch((e) => {
    console.log(e);
  });

const rootHotelData = async () => {
  let price = { price: '$451', originalPrice: '$502' };
  let hotel = hotelInfo;
  // const images = hotel.propertyGallery.images.slice(0, 4);
  const images = hotel.propertyGallery.images;
  let newHotelInfo = new HotelInfo({
    name: hotel.summary.name,
    tagline: hotel.summary.tagline,
    price: price.price,
    originalPrice: price.originalPrice,
    images: images,
    hotel_id: hotel.summary.id,
    rating: hotel.summary.overview.propertyRating.rating,
    propertyRating: hotel.summary.overview.propertyRating.accessibility,
    checkinInstructions: hotel.summary.policies.checkinInstructions,
    Amenities: hotel.summary.amenities.topAmenities.items,
    needToKnow: hotel.summary.policies.needToKnow.body,
  });

  await newHotelInfo.save();
};

rootHotelData();

// const rootHotels = async () => {
//   for (let hotel of hotelData) {
//     let newHotelList = new Hotels({
//       name: hotel.name,
//       url: hotel.propertyImage.image.url,
//       destinationValue: hotel.destinationInfo.distanceFromDestination.value,
//       destinationUnit: hotel.destinationInfo.distanceFromDestination.unit,
//       amount: hotel.price.lead.amount,
//       price: hotel.price.lead.formatted,
//       originalPrice: hotel.price.strikeOut
//         ? hotel.price.strikeOut.formatted
//         : null,
//       star: hotel.star,
//       hotel_id: hotel.id,
//     });

//     await newHotelList.save();
//   }
// };

// rootHotels();

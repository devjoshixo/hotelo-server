const Hotels = require('../Models/hotelsModel');
const HotelInfo = require('../Models/hotelInfoModel');

module.exports.getHotelList = async (req, res) => {
  try {
    const hotels = await Hotels.find();
    res.send(hotels);
  } catch (e) {
    res
      .status(404)
      .json({ errorMessage: 'An Error Occured While fetching hotels' });
  }
};

module.exports.getHotelInfo = async (req, res) => {
  try {
    const hotelInfo = await HotelInfo.findOne();
    res.send(hotelInfo);
  } catch (errorMessage) {
    res
      .status(404)
      .json({ errorMessage: 'An Error Occured While fetching hotelInfo' });
  }
};

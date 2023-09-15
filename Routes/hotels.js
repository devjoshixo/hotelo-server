const router = require('express').Router();
const hotelController = require('../Controller/hotelcontroller');

router.route('/getHomePage').get(hotelController.getHotelList);
router.route('/getHotelDetails').get(hotelController.getHotelInfo);

module.exports = router;

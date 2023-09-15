const router = require('express').Router();
const usercontroller = require('../Controller/usercontroller');

router.route('/login').post(usercontroller.loginUser);
router.route('/signup').post(usercontroller.signupUser);
router.route('/checkEmail').post(usercontroller.checkEmail);

module.exports = router;

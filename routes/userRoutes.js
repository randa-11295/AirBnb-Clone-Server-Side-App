const express = require('express')
const router = express.Router();
const auth = require('../controllers/authController');
const userCtl = require('../controllers/userController');
const book = require("../controllers/bookingContoller");
router
.route('/sign-up')
.post(userCtl.registerUser)
 //API:U02 Register user 

router
.route('/login')
.post(
    auth.login
    //API:U02 Login user JWT
)

router
.route('/my-prop')
/**
 * TODO : API edit my props
 * TODO : API delete my props
 * TODO : API add new prop 
 *          user/my-prop/ 
 */
.post(
    auth.protect,
    userCtl.findMyProperties
    //API:U03 find my properties
)

router
.route('/')
.get(
    auth.protect,
    userCtl.getMyDetails
    //API:U04 find my Details
)
router.route("/host/currunt-bookings/:id")
.get(
    book.getMyCurruntBookings
)
module.exports = router ;
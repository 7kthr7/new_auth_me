const express = require('express')
const router = express.Router();

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Spot, Review, SpotImage, ReviewImage, Booking } = require('../../db/models');
const { validateSpot, validateSpotImage, validateQuery, validateReview, validateBooking} = require('../../utils/validation');
const { spotExists, usersSpot, convertDate } = require('../../utils/err-handlers')


// Get all spots
//validateQuery is the middleWare function to validate the query params of the req
router.get('/', validateQuery, async (req, res, next) => {
    let {page, size, minLat, maxLat, minLng, minPrice, maxPrice} = req.query;
})



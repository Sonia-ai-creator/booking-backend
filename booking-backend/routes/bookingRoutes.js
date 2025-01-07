const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Get single booking
router.get('/:id', bookingController.getBooking);

// Create new booking
router.post('/', bookingController.createBooking);

// Update booking
router.put('/:id', bookingController.updateBooking);

// Delete booking
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
const admin = require('firebase-admin');
const db = admin.firestore();

const bookingController = {
    // Get all bookings
    async getAllBookings(req, res) {
        try {
            const bookingsRef = db.collection('bookings');
            const snapshot = await bookingsRef.get();
            const bookings = [];
            snapshot.forEach(doc => {
                bookings.push({ id: doc.id, ...doc.data() });
            });
            res.json(bookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get single booking
    async getBooking(req, res) {
        try {
            const bookingRef = db.collection('bookings').doc(req.params.id);
            const booking = await bookingRef.get();
            if (!booking.exists) {
                res.status(404).json({ error: 'Booking not found' });
            } else {
                res.json({ id: booking.id, ...booking.data() });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Create booking
    async createBooking(req, res) {
        try {
            const { customerName, service, date, time, phone } = req.body;
            const bookingRef = db.collection('bookings');
            const newBooking = await bookingRef.add({
                customerName,
                service,
                date,
                time,
                phone,
                createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
            res.status(201).json({ id: newBooking.id, message: 'Booking created successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update booking
    async updateBooking(req, res) {
        try {
            const bookingRef = db.collection('bookings').doc(req.params.id);
            await bookingRef.update(req.body);
            res.json({ message: 'Booking updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete booking
    async deleteBooking(req, res) {
        try {
            await db.collection('bookings').doc(req.params.id).delete();
            res.json({ message: 'Booking deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = bookingController;
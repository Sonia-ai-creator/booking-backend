const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = require('./config/serviceAccountKey.json'); // You'll need to add this file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const bookingRoutes = require('./routes/bookingRoutes');

// Use routes
app.use('/api/bookings', bookingRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Salon booking backend server is running!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
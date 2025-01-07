const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Replace with your Firebase service account key
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to add a new booking
app.post('/bookings', async (req, res) => {
  try {
    const { service, date, time, user } = req.body;
    const newBooking = {
      service,
      date,
      time,
      user,
      createdAt: new Date().toISOString(),
    };

    await db.collection('bookings').add(newBooking);
    res.status(201).send({ message: 'Booking successful!' });
  } catch (error) {
    res.status(500).send({ message: 'Error creating booking', error });
  }
});

// Route to get all bookings
app.get('/bookings', async (req, res) => {
  try {
    const snapshot = await db.collection('bookings').get();
    const bookings = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).send(bookings);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching bookings', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

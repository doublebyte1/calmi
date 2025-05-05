const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
const db = new sqlite3.Database('./ring_data.sqlite');


// API to fetch the first ring
app.get('/api/ring', (req, res) => {
  db.get('SELECT * FROM rings LIMIT 1', (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// API to fetch the heart rate
app.get('/api/heart', (req, res) => {
    db.all('SELECT * FROM heart_rates', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });


// API to fetch the sports activities
app.get('/api/sport', (req, res) => {
    db.all('SELECT * FROM sport_details', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });


app.listen(3000, () => console.log('Server running on http://localhost:3000'));

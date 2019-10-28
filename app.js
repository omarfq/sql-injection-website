const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.send('HOME PAGE');
});

app.get('/api', db.getTrips);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

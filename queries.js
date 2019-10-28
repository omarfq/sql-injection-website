const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'colonial_adventure_tours_db',
  password: 'pool00'
});

// Search Query
const getTrips = (req, res) => {
  pool.query(`SELECT * FROM trip`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
      console.log(query);
    }
  });
};

module.exports = {
  getTrips
};

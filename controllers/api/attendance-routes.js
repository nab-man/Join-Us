const router = require('express').Router();
const { Attendence } = require('../../models');

//Route to get attendance
router.get('/', (req, res) => {
  Attendence.findAll()
    .then(dbAttendenceData => res.json(dbAttendenceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
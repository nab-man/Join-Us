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

//POST rout for attendance
router.post("/", (req, res) => {
  Attendence.create({
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbAttendanceData => res.json(dbAttendanceData))
    .catch(err => {
      console.log(err);
    });
});


module.exports = router;
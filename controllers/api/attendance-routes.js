const router = require('express').Router();
const { Attendence, User, Post } = require('../../models');

//Route to get attendance
router.get('/', (req, res) => {
  Attendence.findAll()
    .then(dbAttendenceData => res.json(dbAttendenceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find by_post_ID = parameter
router.get('/:id', (req, res) => {
  Attendence.findOne({
    where: {
      user_id: req.params.user_id
    },
    include: [
      {
        model: User,
        attributes: ['user_name', 'user_id']
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: "The attendance info can't be found." });
      return;
    }
    res.json(dbUserData);
  })
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
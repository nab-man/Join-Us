const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('../home-routes');
const commentRoutes = require('./comment-routes');
const attendanceRoutes = require('./attendance-routes');

//route until here  /api/

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/attendance', attendanceRoutes);

module.exports = router;

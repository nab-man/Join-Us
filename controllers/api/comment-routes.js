const router = require('express').Router();
const { Comment } = require('../../models');
const isAuthorized = require('../../utils/auth');

//GET find comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST new comment
router.post('/', async (req, res) => {
  Comment.create({
    comment_text: req.body.content,
    user_id: req.session.creator_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', isAuthorized, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.comment_id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
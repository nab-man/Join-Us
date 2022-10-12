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

  console.log(req.session)
  Comment.create({
    content: req.body.content,
    creator_id: req.session.user_id,
    post_id: req.body.post_id,
    date_created: new Date()
  })
    .then(dbCommentData => {
      console.log(dbCommentData)
      res.json(dbCommentData)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', isAuthorized, (req, res) => {

console.log("creator ",req.body.creator_id," user ",req.session.user_id);

  if (req.body.creator_id == req.session.user_id) {
    console.log("Deleting comment");
  Comment.destroy({
    where: {
      comment_id: req.params.id
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
  }else{
    res.status(401).json({ message: 'Not authorized' });
  };
});

module.exports = router;
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Attendence } = require("../../models");
const withAuth = require("../../utils/auth");
// /api/posts/
// get all users posts
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: [
      "post_id",
      "title",
      "contents",
      "date_created",
      "creator",
      "location",
      "meetup_date",
      //   [sequelize.literal('(SELECT COUNT(*) FROM attendence WHERE post.post_id = attendence.post_id)'), 'attendee_count']
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['comment_id', 'content', 'post_id', 'creator_id', 'date_created'],
    //     include: {
    //       model: User,
    //       attributes: ['user_name']
    //     }
    //   },
    //   {
    //     model: User,
    //     attributes: ['user_name']
    //   }
    // ]
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
    title: req.body.title,
    contents: req.body.contents,
    creator: req.session.user_id,
    location: req.body.location,
    meetup_date: new Date("2 3 2015"),
    date_created: new Date("2 3 2000")
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put('/upvote', withAuth, (req, res) => {
//   // custom static method created in models/Post.js
//   Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
//     .then(updatedVoteData => res.json(updatedVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', withAuth, (req, res) => {
//   Post.update(
//     {
//       title: req.body.title
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//   console.log('id', req.params.id);
//   Post.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;

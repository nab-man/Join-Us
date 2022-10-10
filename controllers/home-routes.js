const router = require('express').Router();
const moment = require('moment');
const { Post, Comment, User } = require("../models/index.js")




router.get("/", (req, res) => {
  res.redirect('/dashboard')

})

//get all posts for dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      logging: console.log,
      include: [
        { model: Comment, include: [{ model: User, as: "user" }, { model: Post, as: "post" }] },
        {
          model: User, as: "user"
        }
      ],
    })

    let posts = postsData.map((post) =>
      post.get({ raw: true })
    );
    posts = posts.map((post) => {

      let a = moment(post.date_created);
      let b = moment();
      post["dayselapsed"] = Math.abs(a.diff(b, 'days'));
      return post;
    }
    );
    let loggedIn;
    if (req.session.loggedIn) {
      console.log(req.session)
      loggedIn = true;

    }

    res.render('dashboard', {
      posts, loggedIn
    })



  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }

})

router.get("/post/:id", async (req, res) => {

  try {
    const postData = await Post.findOne({
      where: { post_id: req.params.id },
      include: [{ model: Comment, include: [{ model: User, as: "user" }] }, { model: User, as: "user" }]
    })

    if (!postData) {
      res.render('404error');

    } else {
      let loggedIn;
      if (req.session.loggedIn) {
        loggedIn = true
      }
      const post = postData.get({ raw: true })
      console.log(post);
      res.render('partials/post-info', { post, loggedIn })

    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})

router.get("/login", async (req, res) => {
  console.log(req.session.loggedIn);
  const postsData = await Post.findAll({
    logging: console.log,
    include: [
      { model: Comment, include: [{ model: User, as: "user" }, { model: Post, as: "post" }] },
      {
        model: User, as: "user"
      }
    ],
  })
  console.log(postsData)
  console.log(postsData[0].dataValues.comments)
  const posts = postsData.map((post) =>
    post.get({ raw: true })
  );

  if (req.session.loggedIn) {
    console.log("logged in")
    res.render('dashboard', { posts });
    return;
  }

  res.render('login')
});

router.get("/signup", (req, res) => {
  res.render('signup');
})


module.exports = router;

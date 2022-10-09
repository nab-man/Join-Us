const router = require('express').Router();
const { Post, Comment, User } = require("../models/index.js")

router.get("/", (req, res) => {
  res.render('homepage')
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
    console.log(postsData)
    console.log(postsData[0].dataValues.comments)
    const posts = postsData.map((post) =>
      post.get({ raw: true })
    );
    console.log(posts[0].comments)

    res.render('dashboard', {
      posts
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }

})

router.get("/post/:id", async (req, res) => {
  console.log("here")
  try {
    const postData = await Post.findOne({
      where: { post_id: req.params.id },
      include: [{ model: Comment, include: [{ model: User, as: "user" }] }, { model: User, as: "user" }]
    })
    console.log(postData)
    if (!postData) {
      res.render('404error');
    }else{
    const post = postData.get({ raw: true })
    console.log(post);
    res.render('partials/post-info', post)
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

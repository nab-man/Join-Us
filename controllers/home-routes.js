const router = require("express").Router();
const { Post, Comment, User } = require("../models/index.js")

router.get("/", (req, res) => {
  res.render('homepage')
})

//get all posts for dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [
        { model: Comment },
        { model: User }
      ]
    })
    const posts = postsData.map((post) =>
      post.get({ plain: true })
    );
    console.log(posts)
    res.render('dashboard', {
      posts
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }

})

router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    console.log("logged in")
    res.render('dashboard');
    return;
  }

  res.render('login')
});

router.get("/signup", (req, res) => {
  res.render('signup');
})


module.exports = router;

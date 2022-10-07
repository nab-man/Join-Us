const router = require("express").Router();

router.get("/", (req, res) => {
  res.render('homepage')
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

module.exports = router;

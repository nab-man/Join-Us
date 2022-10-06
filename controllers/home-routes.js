const router = require("express").Router();

router.get("/login", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    res.redirect("/dashboard.html");
    return;
  }

  res.redirect("/login.html");
});

module.exports = router;

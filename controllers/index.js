const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const authRoutes = require("./auth/index.js");

router.use("/", homeRoutes);
router.use("/auth", authRoutes);

module.exports = router;

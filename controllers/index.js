const router = require("express").Router();

const apiRoutes = require("./api")
const homeRoutes = require("./home-routes.js");
const authRoutes = require("./auth/index.js");

router.use("/", homeRoutes);
router.use("/auth", authRoutes);
router.use('/api', apiRoutes);

module.exports = router;

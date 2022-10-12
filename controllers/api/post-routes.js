const router = require("express").Router()
const { Post } = require("../../models/index.js")

router.post("/newpost", async function (req, res) {
    console.log("here")
    console.log(req.session)
    console.log(req.body)
    const post = await Post.create({
        title: req.body.title,
        contents: req.body.description,
        date_created: new Date(),
        creator: req.session.user_id,
        location: req.body.location,
        meetup_date: new Date(req.body.datepicker)
    })

    res.json(post)

})

module.exports = router;
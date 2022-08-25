const router = require("express").Router()


router.get("/", (req, res) => {
    res.send('Hey, is User route')
})

module.exports = router
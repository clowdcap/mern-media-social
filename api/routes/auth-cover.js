/* Instanciando rotas */
const router = require("express").Router()

/* Recebendo Schema do Bando de Dados */
const User = require('./../models/User')

router.get("/", (req, res) => {
    res.send('Hey, is Auth route')
})

/* Rota de registro */
router.post("/register", async (req, res) => {
    
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.username,
        })
    
        const user = await new newUser.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router
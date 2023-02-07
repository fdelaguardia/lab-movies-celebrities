// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrities = require('../models/Celebrity.model');

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrities.hbs')
})
router.post('/create', (req, res, next) => {
    Celebrities.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then((createCelebrity) => {
        console.log(createCelebrity)
        res.redirect('/celebrities')
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/', (req, res, next) => {
    Celebrities.find()
    .then((foundCelebrities) => {
        res.render("celebrities/celebrities.hbs", {
            foundCelebrities
        })
    })
})


module.exports = router;
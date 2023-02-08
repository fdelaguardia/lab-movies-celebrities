// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require('../models/Movie.model');
const Celebrities = require('../models/Celebrity.model');

router.get('/create', (req, res, next) => {
    Celebrities.find()
        .then((foundCel) => {
            res.render('movies/new-movies.hbs', {foundCel})
        })
        .catch((err) => {
            console.log(err)
        })
        
})
router.post('/create', (req, res, next) => {
    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot:   req.body.plot,
        cast: req.body.cast,
    })
    .then((createMovies) => {
        console.log(createMovies)
        res.redirect('/movies')
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/', (req, res, next) => {
   
    Movie.find()
    .then((foundMovies) => {
        console.log(foundMovies)
        res.render("movies/movies.hbs", {
            foundMovies
        })
    })
})

router.get('/:id', (req, res, next) => {

    const {id} = req.params
    console.log(id)

    Movie.findOne({id})
        .populate("cast")
        .then((foundMovie) => {
            console.log(foundMovie)
            res.render('movies/movie-details.hbs', {
                foundMovie
            })
        })
})




module.exports = router;
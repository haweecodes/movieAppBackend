const Movie = require('../models/movieModel');

//Simple version, without validation or sanitation
exports.find = function (req, res) {
    console.log(req.query)
    Movie.findOne({'Title': req.query.title}).exec(function (err, movie) {
        if(movie === null){
            res.status(200).send({ message: "Movie does not exists" });
        } else {
            res.send(movie)
        }

    })
}

exports.findAll = function (req, res) {
    Movie.find({}).exec(function (err, movie) {
        if(err) return next(err);
        res.send(movie)
    })
}

exports.create = function (req, res) {
    let movie = new Movie(req.body)
    movie.save(function (err) {
        if (err){
            res.send({err, movie})
        }
        res.send({movie: movie})
    })
}

exports.findUserAddedMovie = function (req, res) {
    Movie.find({User: req.query.user}).exec(function (err, movie) {
        if (err) return next(err);
        res.send(movie)
    })
}


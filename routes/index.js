const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/userController');
const movie_controller = require('../controllers/movieController');


router.post('/create', user_controller.create);
router.get('/individual', user_controller.find);
router.get('/movie', movie_controller.find)
router.post('/movie/create', movie_controller.create)
router.get('/movie/all', movie_controller.findAll)
router.get('/movie/user', movie_controller.findUserAddedMovie)
module.exports = router;
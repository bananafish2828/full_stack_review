const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.route('/movies')
  .get(movieController.getAllMovies)
  .post(movieController.addMovie)

router.delete('/movies/:id', movieController.deleteMovie)

// **other files will need access to information in here**
module.exports = router
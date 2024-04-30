const router = require('express').Router();
const {
  getThoughts,
  getSingleThought
} = require('../../controllers/thoughtController.js')

router.route('/')
  .get(getThoughts)
  .post()

router.route('/:thoughtId')
  .get(getSingleThought)
  .put()
  .delete()

router.route('/:thoughtId/reactions')
  .post()
  .delete()

module.exports = router;

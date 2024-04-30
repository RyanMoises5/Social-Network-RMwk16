const router = require('express').Router();
const {
  getThoughts
} = require('../../controllers/thoughtController.js')

router.route('/')
  .get(getThoughts)
  .post()

router.route('/:thoughtId')
  .get()
  .put()
  .delete()

router.route('/:thoughtId/reactions')
  .post()
  .delete()

module.exports = router;

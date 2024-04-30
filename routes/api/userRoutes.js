const router = require('express').Router();
const {
  getUsers
} = require('../../controllers/userController.js')

router.route('/')
  .get(getUsers)
  .post()

router.route('/:userId')
  .get()
  .put()
  .delete()

router.route('/:userId/friends/:friendId')
  .post()
  .delete()

module.exports = router;

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser
} = require('../../controllers/userController.js')

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:userId')
  .get(getSingleUser)
  .put()
  .delete()

router.route('/:userId/friends/:friendId')
  .post()
  .delete()

module.exports = router;

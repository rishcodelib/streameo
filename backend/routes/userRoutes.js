const express = require('express')
const {
  createUser,
  updateUserById,
  getUserById,
  getUser,
  resetPassword,
  getAllUsers,
} = require('../controllers/userControllers')
const { isSignedIn, isAdmin } = require('../middlewares/authMiddlewares')

const router = express.Router()

// middleware to fetch user data from db if 'userId' is present in the path
router.param('userId', getUserById)

// Routes
router.route('/').get(getAllUsers).post(createUser)

router
  .route('/:userId')
  .get(isSignedIn, getUser)
  .put(isSignedIn, updateUserById)

router.put('/reset-password/:userId', resetPassword)

module.exports = router
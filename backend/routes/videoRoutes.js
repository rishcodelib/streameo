const express = require('express')
const {
  createVideo,
  getVideoById,
  getVideo,
  getAllVideos,
  updateVideoById,
  removeVideoById,
  getPoster,
} = require('../controllers/videoControllers')
const { isAdmin, isSignedIn } = require('../middlewares/authMiddlewares')

const router = express.Router()

router.param('videoId', getVideoById)

router.route('/').get(getAllVideos).post(isSignedIn, isAdmin, createVideo)
router.route('/admin').get(isSignedIn, isAdmin, getAllVideos)
router.route('/poster/:videoId').get(getPoster)

router
  .route('/:videoId')
  .get(getVideo)
  .put(isSignedIn, isAdmin, updateVideoById)
  .delete(isSignedIn, isAdmin, removeVideoById)
router.route('/:videoId/admin').get(isSignedIn, isAdmin, getVideo)

module.exports = router

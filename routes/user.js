const express = require('express')
const controller = require('../controllers/controller')
const {auth} = require('../middlewares/auth')

const router = express.Router()

router.put('/update/:id', auth, controller.updateUser)
router.delete('/delete/:id', auth, controller.deleteUser)
router.get('/:id', auth, controller.getUser)
router.put('/:id/follow', auth, controller.followUser)
router.put('/:id/unfollow', auth, controller.unFollowUser)

module.exports = router

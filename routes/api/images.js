const express = require('express');
const router = express.Router();
const imagesCtrl = require('../../controllers/api/images')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, imagesCtrl.getAll)
router.get('/:projectId', ensureLoggedIn, imagesCtrl.getProjectImages)
router.put('/addProject', ensureLoggedIn, imagesCtrl.handleAddProject)
router.put('/removeProject', ensureLoggedIn, imagesCtrl.removeProject)
router.post('/create', ensureLoggedIn, imagesCtrl.create)
router.delete('/delete', ensureLoggedIn, imagesCtrl.deleteImage)

module.exports = router;
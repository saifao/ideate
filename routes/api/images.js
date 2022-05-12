const express = require('express');
const router = express.Router();
const imagesCtrl = require('../../controllers/api/images')

router.get('/', imagesCtrl.getAll)
router.get('/:projectId', imagesCtrl.getProjectImages)
router.put('/addProject', imagesCtrl.handleAddProject)
router.put('/removeProject', imagesCtrl.removeProject)

module.exports = router;
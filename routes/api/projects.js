const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, projectsCtrl.getAll)
router.post('/create', ensureLoggedIn, projectsCtrl.create)

module.exports = router;
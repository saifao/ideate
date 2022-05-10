const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects')

router.get('/', projectsCtrl.getAll)

module.exports = router;
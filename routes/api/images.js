const express = require('express');
const router = express.Router();
const imagesCtrl = require('../../controllers/api/images')

router.get('/', imagesCtrl.getAll)

module.exports = router;
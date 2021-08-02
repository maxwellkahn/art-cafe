const express = require('express');
const router = express.Router();
const artItemsCtrl = require('../../controllers/api/artItems');

router.get('/', artItemsCtrl.index);

module.exports = router;
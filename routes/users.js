var express = require('express');
var cors = require('cors');
var userCtrl = require('../controllers/user')
var router = express.Router();

router.use(cors())

/* GET users listing. */
router.get('/', userCtrl.get);

router.post('/', userCtrl.post)

module.exports = router;

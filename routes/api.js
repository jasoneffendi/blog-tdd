var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/articles', articleCtrl.get)

router.post('/articles', articleCtrl.post)

router.put('/articles/:id', articleCtrl.put)

router.delete('/articles/:id', articleCtrl.del)
module.exports = router;

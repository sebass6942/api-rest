const{ Router } = require('express');
const router = Router();
const css = require('css');

router.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
  });

module.exports = router;
const router = require('express').Router();

//my router code here 

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


module.exports = router;
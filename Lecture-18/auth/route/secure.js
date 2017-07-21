var router = require('express').Router();

var pathname = 'secure';

function checkUser(req,res, next) {
    if(req.user) {
        next();
    }
    else {
        res.redirect('/');
    }
}

router.use(checkUser);

router.get('/1',function (req,res) {

   res.send(pathname + ' 1 path');
});

router.get('/2',function (req,res) {
    res.send(pathname + ' 2 path');
});



module.exports = router;










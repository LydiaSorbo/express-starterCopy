import express from 'express';
var router = express.Router();

/* GET menus dessert listing. */
router.get('/', function(req, res, next) {
  res.send('this is the desserts section');
});

router.get('/1', function(req, res, next) {
    res.send('Chocolate cake');
});

router.get('/2', function (req, res, next) {
    throw(new Error("Loading dessert 2 failed!"))
    res.send('cookies');
});

router.get('/3', function (req, res, next) {
    try {
        throw(new Error("Loading tiramisu failed!"))
        res.send("tiramisu")
    } catch(err) {
        console.log(err)
        res.status(500).send("Error loading tiramisu")
    }
});

export default router;
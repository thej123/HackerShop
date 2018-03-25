var productController = require('../controllers/productController');
var clientController = require('../controllers/clientController');
var paymentController = require('../controllers/paymentController');

var path = require('path');

module.exports = function(app) {

    
    app.post('/createProduct', clientController.createProducts);
    app.put('/addToCart/:id', productController.addtocart);
    app.put('/removeFromCart/:id', productController.removefromcart);
    app.get('/checkout', paymentController.validateCard);


    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
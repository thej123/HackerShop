var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    // create: function (req, res) {
    //     var product = new Product(req.body);
    //     Product.save(function (err, data) {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         res.json(data)
    //     })
    // },

    // update: function (req, res) {
    //     Product.update({_id: req.params.id}, req.body, function(err, data) {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         res.json(data);
    //     })
    // },

    showall: function (req,res) {
        Product.find({}, function(err, data) {
            if(err) {
                return res.json(err);
            }
            res.json(data);
        })
    },

    showcart: function (req, res) {
        Product.find({
            '_id': { $in: req.params.list }
        }, function(err, data){
            if(err) {
                return res.json(err);
            }
             res.json(data)
        });
    },

    addtocart: function (req, res) {
        console.log('id: ', req.params.id)
        Product.findOne({"_id": req.params.id}, (err, data) => {
            if(err) {
                res.json(err)
                return
            }
            if(data.inventory>0) {
                Product.update({"_id": req.params.id},{$inc : {'inventory' : -1}}, (err, data) => {
                    if(err) {
                        res.json(err)
                        return
                    }
                    res.json({"message": "We are good!"})
                })
            }
            else {
                res.json({"message": "Sorry! We are out of stock!"})
            }
        })
    },

    removefromcart: function (req, res) {
        console.log('id: ', req.params.id)
        Product.findOne({"_id": req.params.id}, (err, data) => {
            if(err) {
                res.json(err)
                return
            }
            Product.update({"_id": req.params.id},{$inc : {'inventory' : 1}}, (err, data) => {
                if(err) {
                    res.json(err)
                    return
                }
                res.json({"message": "We are all good!"})
            })
        })
    },



    // delete: function(req, res) {
    //     Product.remove({_id: req.params.id}, function(err, data) {
    //         if (err) {
    //             res.json(err);
    //             return
    //         }
    //         res.json(data);
    //     })
    // }
}
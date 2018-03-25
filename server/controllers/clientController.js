var mongoose = require('mongoose');
var Client = mongoose.model('Client');
var Product = mongoose.model('Product');

module.exports = {
    createProducts: function (req, res) {
        Client.findOneAndUpdate({name: req.headers.name}, {name: req.headers.name, email: req.headers.email}, {upsert:true}, function(err, clientData){
            if (err) return res.send(500, { error: err });
            // return res.send("succesfully saved");
            // for (var i=0; i<req.headers.products.length; i++) {
            //     var product = arguments[i];
            //     product[_client]=clientData._id
            //     Product.create(product, function (err) {
            //         if (err) return res.send(500, { error: err });
            //         else {
            //             console.log("Multiple documents inserted to Collection");
            //         }
            //     })

            // }
            var product = new Product(req.headers)
            product['_client']=clientData._id

            console.log("hi",product)

            product.save(product, (err, data) => {
                if(err){
                    res.json(err)
                } 
                else {
                    res.json(data)
                }
            })

            // Product.insert(req.params.products, function (err, data) {
            //     if (err){ 
            //         return console.error(err);
            //     } else {
            //       console.log("Multiple documents inserted to Collection");
            //     }
            // });

        });




        // var Product = new Bicycle(req.body);
        // Client.save(function (err, data) {
        //     if(err) {
        //         return res.json(err);
        //     }
        //     res.json(data)
        // })
    },

    // update: function (req, res) {
    //     Bicycle.update({_id: req.params.id}, req.body, function(err, data) {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         res.json(data);
    //     })
    // },

    // showmine: function (req, res) {
    //     Bicycle.find({_creator: req.params.id}, function (err, data) {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         res.json(data);
    //     })
    // },

    // showall: function (req,res) {
    //     console.log("inside showall")
    //     Bicycle.find({})
    //     .populate('User', 'firstName')
    //     .exec(function(err, data) {
    //         if(err) {
    //             return res.json(err);
    //         }
    //         console.log("hi:", data)
    //         res.json(data);
    //     })
    // },

    // delete: function(req, res) {
    //     Bicycle.remove({_id: req.params.id}, function(err, data) {
    //         if (err) {
    //             return res.json(err);
    //         }
    //         res.json(data);
    //     })
    // }
}
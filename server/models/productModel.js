var mongoose = require('mongoose');
var Client = require('../models/clientModel')
var Schema = mongoose.Schema

var ProductSchema = new Schema ({
    title: {type: String, required: [true, "Title missing"], minlength: 3},
    description: {type: String, required: [true, "Description missing"], maxlength: 200},
    price: {type: Number, required: [true, "Email is needed"]},
    image: {type: String},
    inventory: {type: Number, required: [true, "inventory number is needed"]},
    _client: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: [true, "_client is missing"]
        }
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ClientSchema = new Schema ({
    name: {type: String, required: [true, "First name is missing"], minlength: 3},
    email: {type: String},
    _product: [{type: Schema.Types.ObjectId,
        ref: 'Product'}]
}, {timestamps: true})

mongoose.model('Client', ClientSchema);
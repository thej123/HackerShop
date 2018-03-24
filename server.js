var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 8000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/dist')));

//require('./server/views/mongoose.js');
var routes_setter = require('./server/views/routes.js');
routes_setter(app);

app.listen(port, function() {
    console.log("listening to port", port);
})
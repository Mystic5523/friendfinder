var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var p = path.join(__dirname, '/routing/apiRoutes')
var o = path.join(__dirname, '/routing/htmlRoutes')

require(p)(app);
require(o)(app);

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});


// function compare(userInfo.scores[], friends[i].scores[]) {
//     const differences = [];


// }


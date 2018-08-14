var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var p = path.join(__dirname, '/routing/apiRoutes.js')
// var o = path.join(__dirname, '/routing/htmlRoutes.js')

// require(p)(app);
// require(o)(app);

// let apiRoutes = require('./app/routing/apiRoutes')
// let htmlRoutes = require('./app/routing/htmlRoutes')
// app.use("/api", apiRoutes)
// app.use("/", htmlRoutes)


app.listen(PORT, function () {
            console.log('App listening on PORT: ' + PORT);
        });


var express = require('express');
var app = express();

var middleware = require('./middleware.js');

// var middleware = {
// 	requireAuthentication: function (req, res, next){
// 		console.log('Private route hit!');
// 		next();
// 	},
// 	logger: function (req, res, next) {

// 		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
// 		next();
// 	}
// };

app.use(middleware.logger);

// app.get('/', function (req, res) {
//   res.send('Hello Express!');
// });

// /about
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});

// expose an entire folder
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function (){
	console.log('Express server started!');
});
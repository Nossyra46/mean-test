var express = require('express'), app = express();
var path = require('path');
var adminRouter = express.Router();

app.use('/admin', adminRouter);

adminRouter.get('/', function(req, res) {
 	res.send('I am the dashboard!');
 });

adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!');
 });

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!');
 });

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('1337 is the magic port!');
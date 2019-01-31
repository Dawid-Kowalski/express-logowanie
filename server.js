const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
	res.render('login-template');
})

app.post('/loged', function (req, res) {
	res.render('loged-template');
})

app.listen(3000);
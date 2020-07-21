const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.get('/work', (request, response) => {
  response.render('work');
});

app.get('/gallery', (request, response) => {
  response.render('gallery');
});

app.get('/*', (request, response) => {
  response.render('home');
});

app.listen(3000);

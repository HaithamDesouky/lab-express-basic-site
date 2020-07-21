const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/home', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/work', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/views/work.html');
});

app.get('/gallery', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('/*', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3000);

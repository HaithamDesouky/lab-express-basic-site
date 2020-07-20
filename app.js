const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/public/home.html');
});

app.get('/about', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/public/about.html');
});

app.get('/work', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/public/work.html');
});

app.get('/gallery', (request, response) => {
  console.log('Request received'); // this is a route handler - the handle endpoints but are called "route handler"
  response.sendFile(__dirname + '/public/gallery.html');
});

app.listen(3000);

const express = require('express');
const app = express();
const port = 3000;
const getMovies = require('./movies');

app.get('/api/movies', (req, res) => res.send(getMovies()));

app.listen(port, () => console.log(`hello!`));
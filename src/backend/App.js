const express = require('express');
const app = express();
const port = 3001;
const getMovies = require('./movies');

app.get('/rest/movies', (req, res) => res.send(getMovies()));

app.listen(port, () => console.log(getMovies));
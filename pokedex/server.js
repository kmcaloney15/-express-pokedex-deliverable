const express    = require('express');
const app        = express();
const Pokemon = require('../models/pokemon.js');


// INDEX
app.get('/', (req, res) => {
res.render('index.liquid', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
res.render('show.liquid', { data: Pokemon[req.params.id] });
});









// PORT
app.listen(3000, () => {
    console.log("port 3000 is active")
})
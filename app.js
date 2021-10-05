const express = require('express');
let path = require('path')

const app = express ();
const server = require('http').Server(app);
app.set('view engine', 'html');



app.use(express.static(path.join(__dirname)));
app.get('/',(req,res) => {
    res.render('index');
} )
app.listen(8080);
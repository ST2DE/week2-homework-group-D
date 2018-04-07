const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'main.html');
});

app.listen(3000, function(){
    console.log('App is running on port 3000.');
});
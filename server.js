const express = require('express');
const path = require('path');
const app = express();
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/save', function(req, res){
fs.writeFile(__dirname+'/src/components/participantsList.json', JSON.stringify(req.body), (err) => {
  if (err) throw err;
});
  res.send(req.body);

});

app.get('/getList', function(req, res){  
  // res.sendFile(path.join(__dirname, 'src/components', 'participantsList.json'));
    res.sendFile(__dirname+'/src/components/participantsList.json');
});

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 })

app.listen(9000);
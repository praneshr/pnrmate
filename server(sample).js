const path = require('path')
, Express = require('express')
, request = require('request')
, bodyParser = require('body-parser')
, app = Express()
, remoteServer = config.host
, port = process.env.PORT || 8080;

//Express configuration
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(Express.static('build'));

//Express Routes
app.get('/query',function(req, res){

});

app.get('/*' , function(req, res){
  const file = path.join(__dirname, '/build', 'index.html');
  res.sendFile(file);
});

app.listen(port, function (){
  console.log('http://localhost:' + port);
});

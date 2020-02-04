let fs = require('fs');
let express = require('express');
let app = express();
const WebSocket = require('ws');
// Let's create the regular HTTP request and response
app.get('/', function(req, res) {

  console.log('Get index');
  fs.createReadStream('./views/index.html')
  .pipe(res);
  
});

app.get('/notify', function(req, res) {
  const exampleSocket = new WebSocket('ws://computernotifier.glitch.me/', {
  });
  exampleSocket.on('open', function open() {
    console.log("Opened!")
    exampleSocket.send("Play!")
    res.json("Notified!")
  });
});

app.get('/notifyoff', function(req, res) {
  const exampleSocket = new WebSocket('ws://computernotifier.glitch.me/', {
  });
  exampleSocket.on('open', function open() {
    console.log("Opened!")
    exampleSocket.send("FortniteOff")
    res.json("Notified!")
  });
});

app.get('/notifyfood', function(req, res) {
  const exampleSocket = new WebSocket('ws://computernotifier.glitch.me/', {
  });
  exampleSocket.on('open', function open() {
    console.log("Opened!")
    exampleSocket.send("NotifyFood")
    res.json("Notified!")
  });
});

app.get('/notifyother', function(req, res) {
  const exampleSocket = new WebSocket('ws://computernotifier.glitch.me/', {
  });
  exampleSocket.on('open', function open() {
    console.log("Opened!")
    var msg = req.query.msg
    exampleSocket.send("Other|" + msg)
    res.json("Notified!")
  });
});



module.exports = app;
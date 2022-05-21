var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello opemipo1");
});

app.listen(4000);

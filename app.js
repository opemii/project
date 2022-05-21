var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello cowel");
});

app.listen(4000);

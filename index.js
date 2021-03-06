var express = require("express");
var app = express();
var PORT = process.env.PORT || 8090;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/home.html");
});

app.listen(PORT, function(){
  console.log("listening on port %s",PORT);
});
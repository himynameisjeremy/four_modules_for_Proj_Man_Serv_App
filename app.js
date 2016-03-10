var http = require('http');
var employee = require("./createEmployee.js");

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(employee);
  res.end();
}).listen(3000);


const http = require("http");

const dotenv = require("dotenv")
dotenv.config()

let port = +process.env.PORT || 3000;



const server = http.createServer(function(req,res){
// console.log("ciao"); 
res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
res.end("<h1>ciao ciu </h1>")

})

server.listen(port, function(){
    console.log("http:/localhost:" + port);
})
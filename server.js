
const http = require("http");

const dotenv = require("dotenv")
dotenv.config()

let port = +process.env.PORT || 3000;
let randomNumber = Math.floor(Math.random() * 10) + 1;
// let newRandomNumber = Math.floor(Math.random() * 10) + 1;

const frasiDemotivazionali = [
    "Il successo è sopravvalutato.",
    "Il fallimento è sempre un'opzione.",
    "Lavorare duro non sempre paga.",
    "Il futuro è incerto e probabilmente deludente.",
    "Le aspettative sono spesso deluse.",
    "Niente ha senso, quindi perché provarci?",
    "La mediocrità è la norma.",
    "Le tue ambizioni sono probabilmente troppo alte.",
    "La fortuna è solo un mito.",
    "Il mondo è pieno di opportunità mancate."
  ];

const server = http.createServer(function(req,res){
    
res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

// while (newRandomNumber === randomNumber) {
//   newRandomNumber = Math.floor(Math.random() * 9) + 1;
// }
res.end(frasiDemotivazionali[randomNumber])

})

server.listen(port, function(){
    console.log("http:/localhost:" + port);
})
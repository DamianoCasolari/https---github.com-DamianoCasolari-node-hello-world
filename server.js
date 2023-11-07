
const { log } = require("console");
const http = require("http");
const dotenv = require("dotenv");
dotenv.config()

let port = +process.env.PORT || 3000;




const server = http.createServer(function(req,res){
    
res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})

// while (newRandomNumber === randomNumber) {
//   newRandomNumber = Math.floor(Math.random() * 9) + 1;
// }
res.end( "<h1>" + randomSentence() + "</h1>" )

})



server.listen(port, function(){
    console.log("http:/localhost:" + port);
})




// function Random Sentence

function randomSentence(){
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

    let randomNumber = Math.floor(Math.random() * (frasiDemotivazionali.length - 1)) + 1;
    const fraseSingola = frasiDemotivazionali[randomNumber];

    return fraseSingola;
}
const { log } = require("console");

// Import the instance of the http object (it already exists so I don't have to start it: "config").
const http = require("http");

// Import the dotenv library.
const dotenv = require("dotenv");

// I have to configure it.
dotenv.config();

// I define the port.
let port = +process.env.PORT || 3000;

// I create the server (req is the request, and res is the response).
const server = http.createServer(function (req, res) {

    // I define that the response will be HTML with the charset set to utf-8.
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // I define what will appear on the page.
    res.end("<h1>" + randomSentence() + "</h1>");

});

// I define the URL that will activate my server.
server.listen(port, function () {
    console.log("http://localhost:" + port);
});

// Random Sentence function.
function randomSentence() {
    const frasiDemotivazionali = [
        "Il successo è sopravvalutato.",
        "Il fallimento è sempre un'opzione.",
        "Lavorare duramente non sempre paga.",
        "Il futuro è incerto e probabilmente deludente.",
        "Le aspettative sono spesso deluse.",
        "Niente ha senso, quindi perché provarci?",
        "La mediocrità è la norma.",
        "Le tue ambizioni sono probabilmente troppo alte.",
        "La fortuna è solo un mito.",
        "Il mondo è pieno di opportunità mancate."
    ];

    let randomNumber = Math.floor(Math.random() * frasiDemotivazionali.length);
    
    // Check if the new random number is the same as the previous one.
    while (process.env.FRASE === randomNumber) {
        randomNumber = Math.floor(Math.random() * frasiDemotivazionali.length);
    }
    
    process.env.FRASE = randomNumber;
    const fraseSingola = frasiDemotivazionali[randomNumber];

    return fraseSingola;
}

//alert("welcome to tic tac toe");
var markers = [ '<img src="img/toad.png">', '<img src="img/koopa.png">'];
var players = ['<span id="turn-message" class="mario">Mario</span>', '<span id="turn-message" class="bowser">Bowser</span>']
var whoseTurn = 0
function playGame(c) {
    c.innerHTML = markers[whoseTurn]
    if(whoseTurn) whoseTurn = 0; else whoseTurn = 1;
    c.attributes[1].nodeValue = "";
    document.getElementById("turn-message").innerHTML = players[whoseTurn];
}
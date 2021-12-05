//alert("welcome to tic tac toe");
const p1 = prompt("Player1");
const p2 = prompt("Player2");
var markers = ['<img src="img/toad.png">', '<img src="img/koopa.png">'];
var playersCss = [`<span class="mario" id="player"></span>`, `<span class="bowser" id="player"></span>`];
var players = [p1, p2];
var totals = [0, 0];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var whoseTurn = 0;
var gameOver = false;

function startGame() {
    document.getElementById("turn-message").innerHTML = playersCss[whoseTurn];
    document.getElementById("player").innerHTML = players[whoseTurn];
}

function playGame(c, n) {
    if (!isWin()) {
    //add x or o to playing field
    c.innerHTML = markers[whoseTurn]
    // Track Totals
    totals[whoseTurn] += n;
        // call isWin()
        if (isWin()) {
            document.getElementById("game-message").innerText = players[whoseTurn] + " Wins!"
        } else if (gameOver) {
            document.getElementById("game-message").innerHTML = "evil prevails";
        } else {
            //Toggle player turn
            if (whoseTurn) whoseTurn = 0;
            else whoseTurn = 1;
            // prevent clicking on same div
            c.attributes[1].nodeValue = "";
            // Toggle player display
            document.getElementById("turn-message").innerHTML = playersCss[whoseTurn];
            document.getElementById("player").innerHTML = players[whoseTurn];
        }
    }


}

function isWin() {
    for (i = 0; i < winCodes.length; i++) {
        if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) return true;
    }
    if (totals[0] + totals[1] == 511) {
        gameOver = true;
    }
    return false;
}
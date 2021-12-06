//alert("welcome to tic tac toe");
const p1 = prompt("Player1");
const p2 = prompt("Player2");
var markers = ['<img src="img/toad.png">', '<img src="img/koopa.png">'];
var playersCss = [`<span class="mario" id="player"></span>`, `<span class="bowser" id="player"></span>`];
var players = [p1, p2];
var scores = [0,0,0]; 
var totals = [];
var winCodes = [7, 56, 73, 84, 146, 273, 292, 448];
var whoseTurn = 0;
var gameOver = false;
var marioWin = document.getElementById("mario-win");
var bowserWin = document.getElementById("bowser-win");

function startGame() {
    totals = [0, 0]
    gameOver = false;
    var counter = 1;
    var innerDivs = ""
    for (i = 1; i <=3; i++) {
        innerDivs += '<div class="row" id="row-' + i + '">';
        for (j = 1; j <=3; j++) {
            innerDivs +=  '<div class="col square" onclick="playGame(this,' + counter + ');"></div>'
            counter *=2;
        }
        innerDivs += '</div>';
    }
    document.getElementById("gameboard").innerHTML = innerDivs;
    document.getElementById("turn-message").innerHTML = playersCss[whoseTurn];
    document.getElementById("player").innerHTML = players[whoseTurn];
    document.getElementById("p1score").innerText = players[0] + " has " + scores[0] + " Wins!" 
    document.getElementById("p2score").innerText = players[1] + " has " + scores[1] + " Wins!"
    document.getElementById("ties").innerText = "The Cat has " + scores[2] + " Wins!"
}

function playGame(c, n) {
    if (!isWin()) {
    //add x or o to playing field
    c.innerHTML = markers[whoseTurn]
    // Track Totals
    totals[whoseTurn] += n;
        // call isWin()
        if (isWin()) {
            scores[whoseTurn] +++ 1;
            console.log(scores)
            document.getElementById("turn-message").innerText = players[whoseTurn] + " Wins!"
            document.getElementById("p1score").innerText = players[0] + " has " + scores[0] + " Wins!"
            document.getElementById("p2score").innerText = players[1] + " has " + scores[1] + " Wins!"
            marioWin.play();
        } else if (gameOver) {
            scores[2] +++ 1;
            document.getElementById("turn-message").innerHTML = "Cat's Game";
            document.getElementById("ties").innerText = "The Cat has " + scores[2] + " Wins!"
            bowserWin.play();
        } else {
            //Toggle player turn
            if (whoseTurn) whoseTurn = 0;
            else whoseTurn = 1;
            // prevent clicking on same div
            c.attributes[1].nodeValue = '';
            // Toggle player display
            document.getElementById("turn-message").innerHTML = playersCss[whoseTurn];
            document.getElementById("player").innerHTML = players[whoseTurn];
        }
    }


}
// This function displays wins
function isWin() {
    for (i = 0; i < winCodes.length; i++) {
        if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) 
        {
            gameOver=true; return true;
        }
    }
    if (totals[0] + totals[1] == 511) {

        gameOver = true;
    }
}

// This function allows the board to be reset without reseting scores.
function resetBoard() {
    startGame();
}

/***********************************************/
/*                CONTROLLER                   */
/***********************************************/
// reset button click: tell model to reset game

// game square click: tell model to play the piece


/***********************************************/
/*                   MODEL                     */
/***********************************************/
var game = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// reset game board in storage
// tell view to reset board on page
var resetGame = () => {};

// add piece to game board in storage
// tell view to display piece on board on page
var playPiece = (player, location) => {};

// check if there's a winner
// tell view to display winner if yes
var hasWon = () => {};

// check if there's a tie
// tell view to display tie message if yes
var hasTied = () => {};


/***********************************************/
/*                    VIEW                     */
/***********************************************/
var displayPiece = (player, location) => {};

var freshBoard = () => {};

var switchPlayer = () => {};

var endGameMessage = () => {};
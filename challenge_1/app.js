/***********************************************/
/*                CONTROLLER                   */
/***********************************************/
var controller = {
  resetButton: document.getElementsByClassName('reset')[0],

  squares: document.getElementsByClassName('square')
};

// reset button click: tell model to reset game
controller.resetButton.addEventListener('click', (event) => {
  model.resetGame();
});

// game square click: tell model to play the piece
for (let square of controller.squares) {
  square.addEventListener('click', (event) => {
    model.playPiece(event.target);
  })
}


/***********************************************/
/*                   MODEL                     */
/***********************************************/
var model = {
  game: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ],

  // reset game board in storage
  // tell view to reset board on page
  resetGame: () => {
    console.log('reset clicked');
  },

  // add piece to game board in storage
  // tell view to display piece on board on page
  playPiece: (square) => {
    console.log('play piece at ' + square.className);
  },

  // check if there's a winner
  // tell view to display winner if yes
  hasWon: () => {},

  // check if there's a tie
  // tell view to display tie message if yes
  hasTied: () => {}
};


/***********************************************/
/*                    VIEW                     */
/***********************************************/
var view = {
  displayPiece: (player, location) => {},

  freshBoard: () => {},

  switchPlayer: () => {},

  endGameMessage: () => {}
};

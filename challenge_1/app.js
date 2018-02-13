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
    let coordinates = event.target.classList[1];
    let col = coordinates[0];
    let row = coordinates[2];
    model.playPiece(col, row);
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

  player: 'X',

  // reset game board in storage
  // tell view to reset board on page
  resetGame: () => {
    model.game.forEach((row) => {
      row.forEach((square, index) => {
        row[index] = '';
      });
    });
    model.player = 'X';
    view.resetBoard();
  },

  // add piece to game board in storage
  // tell view to display piece on board on page
  playPiece: (col, row) => {
    model.game[row][col] = model.player;
    view.displayPiece(model.player, `${col}-${row}`);

    if (model.hasWon(model.player)) {
      view.endGame(`${model.player} Wins!`);
    } else if (model.isTied()) {
      view.endGame('Game Tied!');
    } else {
      view.switchPlayer(model.togglePlayer());
    }
  },

  togglePlayer: () => {
    if (model.player === 'X') {
      model.player = 'O';
    } else if (model.player === 'O') {
      model.player = 'X';
    }
    return model.player;
  },

  // check if there's a winner
  // tell view to display winner if yes
  hasWon: () => {},

  // check if there's a tie
  // tell view to display tie message if yes
  isTied: () => {}
};


/***********************************************/
/*                    VIEW                     */
/***********************************************/
var view = {
  displayPiece: (player, location) => {
    console.log(player, location);
  },

  resetBoard: () => {
    console.log('called reset board in view');
  },

  switchPlayer: (player) => {
    console.log('new player: ', player);
  },

  endGame: (message) => {
    console.log('ending game with message: ', message);
  }
};

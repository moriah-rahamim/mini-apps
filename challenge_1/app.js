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
  resetGame: function() {
    this.game.forEach((row) => {
      row.forEach((square, index) => {
        row[index] = '';
      });
    });
    this.player = 'X';
    view.resetBoard();
  },

  // add piece to game board in storage
  // tell view to display piece on board on page
  playPiece: function(col, row) {
    this.game[row][col] = this.player;
    view.displayPiece(this.player, `${col}-${row}`);

    if (this.hasWon(this.player)) {
      view.endGame(`${this.player} Wins!`);
    } else if (this.boardFull()) {
      view.endGame('Game Tied!');
    } else {
      view.switchPlayer(this.togglePlayer());
    }
  },

  togglePlayer: function() {
    if (this.player === 'X') {
      this.player = 'O';
    } else if (this.player === 'O') {
      this.player = 'X';
    }
    return this.player;
  },

  hasWon: function(player) {
    let game = this.game;

    for (let pattern of this.winningPatterns) {
      if (this.hasMatch(player, pattern)) {
        return true;
      }
    }
    return false;
  },

  winningPatterns: [
    // vertical
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    // horizontal
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    // diagonal
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ],

  hasMatch: function(player, pattern) {
    for (let coordinates of pattern) {
      let [col, row] = coordinates;

      if (this.game[row][col] !== player) {
        return false;
      }
    }
    return true;
  },

  boardFull: function() {
    for (let row of this.game) {
      for (let square of row) {
        if (square === '') {
          return false;
        }
      }
    }
    return true;
  }
};


/***********************************************/
/*                    VIEW                     */
/***********************************************/
var view = {

  squares: document.getElementsByClassName('square'),

  displayPiece: function(player, location) {
    let square = document.getElementsByClassName(location)[0];
    square.innerHTML = player;
  },

  resetBoard: function() {
    for (let square of this.squares) {
      square.innerHTML = '';
    }
    document.getElementsByClassName('announcement')[0].style.display = 'none';
    document.getElementsByClassName('turns')[0].style.display = 'block';
    this.switchPlayer('X');
  },

  switchPlayer: function(player) {
    document.getElementsByClassName('player')[0].innerHTML = player;
  },

  endGame: function(message) {
    let announcement = document.getElementsByClassName('announcement')[0];
    announcement.innerHTML = message;
    announcement.style.display = 'block';
    document.getElementsByClassName('turns')[0].style.display = 'none';
  }
};

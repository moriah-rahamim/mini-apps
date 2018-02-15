class Board extends React.Component {
  constructor(props) {
    super(props);

    this.columns = 7;
    this.rows = 6;
    this.playerAfter = {
      red: 'black',
      black: 'red'
    };

    this.state = {
      board: Array(this.columns).fill(Array(this.rows).fill(null)),
      player: 'red'
    };
  }

  playPiece(col, row) {
    let player = this.state.player;
    let boardCopy = this.state.board.map(arr => arr.slice());
    boardCopy[col][row] = player;
    this.setState({board: boardCopy});
  }

  clickSlot(colNum) {
    // find the lowest-down empty spot
    let column = this.state.board[colNum];
    let insertRow = column.indexOf(null);

    // if there's an empty spot, put the piece there and change the player
    if (insertRow !== -1) {
      this.playPiece(colNum, insertRow);
      this.setState({player: this.playerAfter[this.state.player]});
    }
  }

  render() {
    return (
      <div className="board">
        {
          this.state.board.map((colArr, colNum) => {
            return <Slot key={colNum} colNum={colNum} colArr={colArr}
                    clickSlot={this.clickSlot.bind(this)}/>
          })
        }
      </div>
    );
  }

}
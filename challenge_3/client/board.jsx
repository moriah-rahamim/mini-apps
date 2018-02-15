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

  addPiece(player, col, row) {
    let boardCopy = this.state.board.map(arr => arr.slice());
    boardCopy[col][row] = player;
    this.setState({board: boardCopy});
  }

  columnClick(colNum) {
    let column = this.state.board[colNum];
    let player = this.state.player;
    let insertIdx = column.indexOf(null);

  }

  componentDidMount() {
    console.log('hello world');
    this.addPiece('red', 0, 0);
  }

  render() {
    return (
      <div className="board">
        {
          this.state.board.map((colArr, colNum) => {
            return <Slot key={colNum} colNum={colNum} colArr={colArr}/>
          })
        }
      </div>
    );
  }

}
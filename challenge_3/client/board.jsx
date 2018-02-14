class Board extends React.Component {
  constructor(props) {
    super(props);

    this.columns = 7;
    this.rows = 6;

    this.state = {
      board: Array(this.columns).fill(Array(this.rows).fill(null))
    };
  }

  addPiece(player, col, row) {
    let boardCopy = this.state.board.map(arr => arr.slice());
    boardCopy[col][row] = player;
    this.setState({board: boardCopy});
  }

  componentDidMount() {
    console.log('hello world');
    this.addPiece('red', 0, 0);
  }

  render() {
    return (
      <div>
        <div>This is a react board component</div>
        <div>Columns: {this.columns}</div>
        <div>Rows: {this.rows}</div>
      </div>
    );
  }

}
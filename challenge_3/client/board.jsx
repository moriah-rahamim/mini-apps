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

  renderSlots() {

  }

  componentDidMount() {
    console.log('hello world');
    this.addPiece('red', 0, 0);
  }

  render() {
    return (
      <div className="board">
        <Slot col={1}/>
        <Slot col={2}/>
        <Slot col={3}/>
        <Slot col={4}/>
        <Slot col={5}/>
        <Slot col={6}/>
        <Slot col={7}/>
      </div>
    );
  }

}
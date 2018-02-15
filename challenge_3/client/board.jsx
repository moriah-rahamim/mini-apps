class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: Array(this.props.columns).fill(Array(this.props.rows).fill(null))
    };
  }

  playPiece(col, row) {
    let currentPlayer = this.props.currentPlayer;
    let gridCopy = this.state.grid.map(arr => arr.slice());
    gridCopy[col][row] = currentPlayer;
    this.setState({grid: gridCopy});
  }

  clickSlot(colNum) {
    // find the lowest-down empty spot
    let column = this.state.grid[colNum];
    let insertRow = column.indexOf(null);

    // if there's an empty spot, put the piece there and change the player
    if (insertRow !== -1) {
      this.playPiece(colNum, insertRow);
      this.props.togglePlayer();
    }
  }

  render() {
    return (
      <div className="board">
        {
          this.state.grid.map((colArr, colNum) => {
            return <Slot key={colNum} colNum={colNum} colArr={colArr}
                    clickSlot={this.clickSlot.bind(this)}/>
          })
        }
      </div>
    );
  }

}
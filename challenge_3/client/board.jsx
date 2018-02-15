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
    this.setState({grid: gridCopy}, function() {
      if(this.winningMove.call(this, col, row, currentPlayer)) console.log('winner');
    });
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

  winningMove(col, row, player) {
    if(this.horizontalWin(col, row, player) ||
       this.verticalWin(col, row, player) ||
       this.diagonalWin(col, row, player)) {
      return true;
    }
    return false;
  }

  horizontalWin(col, row, player) {
    let count = 0;
    let i = col;
    let j = col - 1;

    while (i < this.props.columns || j >=0) {
      let rightCol = this.state.grid[i++];
      let leftCol = this.state.grid[j--];

      if (rightCol && rightCol[row] === player) {
        count++;
      } else {
        i = this.props.columns;
      }
      if (leftCol && leftCol[row] === player) {
        count++;
      } else {
        j = -1;
      }

      if (count >= 4) return true;
    }
    
    return false;
  }

  verticalWin(col, row, player) {
    let count = 0;
    let i = row;
    let j = row - 1;

    while (i < this.props.rows || j >=0) {
      let top = this.state.grid[col][i++];
      let bottom = this.state.grid[col][j--];

      if (top && top === player) {
        count++;
      } else {
        i = this.props.rows;
      }
      if (bottom && bottom === player) {
        count++;
      } else {
        j = -1;
      }

      if (count >= 4) return true;
    }

    return false;
  }

  diagonalWin(col, row, player) {
    let count = 0;

    let xRight = col;
    let yRight = row;

    let xLeft = col - 1;
    let yLeft = row - 1;

    // go right-up
    while (xRight < this.props.cols && yRight < this.props.rows) {
      let right = this.state.grid[xRight][yRight];

      if (right === player) {
        count++;
      } else {
        xRight = this.props.cols;
      }
      xRight++;
      yRight++;
    }

    // go left-down
    while (xLeft >= 0 && yLeft >= 0) {
      let left = this.state.grid[xLeft][yLeft];

      if (left === player) {
        count++;
      } else {
        xLeft = -1;
      }

      xLeft--;
      yLeft--;
    }
    if (count >= 4) return true;




    count = 0;

    xRight = col;
    yRight = row;

    xLeft = col - 1;
    yLeft = row - 1;

    // go right-down
    while (xRight < this.props.cols && yRight >= 0) {
      let right = this.state.grid[xRight++][yRight--];

      if (right === player) {
        count++;
      } else {
        xRight = this.props.cols;
      }
    }

    // go left-up
    while (xLeft >= 0 && yLeft < this.props.rows) {
      let left = this.state.grid[xLeft--][yLeft++];

      if (left === player) {
        count++;
      } else {
        xLeft = -1;
      }
    }
    if (count >= 4) return true;

    return false;
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
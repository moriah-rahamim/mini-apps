"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.state = {
      grid: Array(_this.props.columns).fill(Array(_this.props.rows).fill(null))
    };
    return _this;
  }

  _createClass(Board, [{
    key: "playPiece",
    value: function playPiece(col, row) {
      var currentPlayer = this.props.currentPlayer;
      var gridCopy = this.state.grid.map(function (arr) {
        return arr.slice();
      });
      gridCopy[col][row] = currentPlayer;
      this.setState({ grid: gridCopy }, function () {
        if (this.winningMove.call(this, col, row, currentPlayer)) console.log('winner');
      });
    }
  }, {
    key: "clickSlot",
    value: function clickSlot(colNum) {
      // find the lowest-down empty spot
      var column = this.state.grid[colNum];
      var insertRow = column.indexOf(null);

      // if there's an empty spot, put the piece there and change the player
      if (insertRow !== -1) {
        this.playPiece(colNum, insertRow);
        this.props.togglePlayer();
      }
    }
  }, {
    key: "winningMove",
    value: function winningMove(col, row, player) {
      if (this.horizontalWin(col, row, player) || this.verticalWin(col, row, player) || this.diagonalWin(col, row, player)) {
        return true;
      }
      return false;
    }
  }, {
    key: "horizontalWin",
    value: function horizontalWin(col, row, player) {
      var count = 0;
      var i = col;
      var j = col - 1;

      while (i < this.props.columns || j >= 0) {
        var rightCol = this.state.grid[i++];
        var leftCol = this.state.grid[j--];

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
  }, {
    key: "verticalWin",
    value: function verticalWin(col, row, player) {
      var count = 0;
      var i = row;
      var j = row - 1;

      while (i < this.props.rows || j >= 0) {
        var top = this.state.grid[col][i++];
        var bottom = this.state.grid[col][j--];

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
  }, {
    key: "diagonalWin",
    value: function diagonalWin(col, row, player) {
      var count = 0;

      var xRight = col;
      var yRight = row;

      var xLeft = col - 1;
      var yLeft = row - 1;

      // go right-up
      while (xRight < this.props.cols && yRight < this.props.rows) {
        var right = this.state.grid[xRight][yRight];

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
        var left = this.state.grid[xLeft][yLeft];

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
        var _right = this.state.grid[xRight++][yRight--];

        if (_right === player) {
          count++;
        } else {
          xRight = this.props.cols;
        }
      }

      // go left-up
      while (xLeft >= 0 && yLeft < this.props.rows) {
        var _left = this.state.grid[xLeft--][yLeft++];

        if (_left === player) {
          count++;
        } else {
          xLeft = -1;
        }
      }
      if (count >= 4) return true;

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "board" },
        this.state.grid.map(function (colArr, colNum) {
          return React.createElement(Slot, { key: colNum, colNum: colNum, colArr: colArr,
            clickSlot: _this2.clickSlot.bind(_this2) });
        })
      );
    }
  }]);

  return Board;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJncmlkIiwiQXJyYXkiLCJjb2x1bW5zIiwiZmlsbCIsInJvd3MiLCJjb2wiLCJyb3ciLCJjdXJyZW50UGxheWVyIiwiZ3JpZENvcHkiLCJtYXAiLCJhcnIiLCJzbGljZSIsInNldFN0YXRlIiwid2lubmluZ01vdmUiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsImNvbE51bSIsImNvbHVtbiIsImluc2VydFJvdyIsImluZGV4T2YiLCJwbGF5UGllY2UiLCJ0b2dnbGVQbGF5ZXIiLCJwbGF5ZXIiLCJob3Jpem9udGFsV2luIiwidmVydGljYWxXaW4iLCJkaWFnb25hbFdpbiIsImNvdW50IiwiaSIsImoiLCJyaWdodENvbCIsImxlZnRDb2wiLCJ0b3AiLCJib3R0b20iLCJ4UmlnaHQiLCJ5UmlnaHQiLCJ4TGVmdCIsInlMZWZ0IiwiY29scyIsInJpZ2h0IiwibGVmdCIsImNvbEFyciIsImNsaWNrU2xvdCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsTUFBTSxNQUFLSCxLQUFMLENBQVdJLE9BQWpCLEVBQTBCQyxJQUExQixDQUErQkYsTUFBTSxNQUFLSCxLQUFMLENBQVdNLElBQWpCLEVBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUEvQjtBQURLLEtBQWI7QUFIaUI7QUFNbEI7Ozs7OEJBRVNFLEcsRUFBS0MsRyxFQUFLO0FBQ2xCLFVBQUlDLGdCQUFnQixLQUFLVCxLQUFMLENBQVdTLGFBQS9CO0FBQ0EsVUFBSUMsV0FBVyxLQUFLVCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JTLEdBQWhCLENBQW9CO0FBQUEsZUFBT0MsSUFBSUMsS0FBSixFQUFQO0FBQUEsT0FBcEIs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S3BDLEtBQUwsQ0FBV3dDLElBQXBCLElBQTRCSCxVQUFVLENBQTdDLEVBQWdEO0FBQzlDLFlBQUlJLFNBQVEsS0FBS3hDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmtDLFFBQWhCLEVBQTBCQyxRQUExQixDQUFaOztBQUVBLFlBQUlJLFdBQVVoQixNQUFkLEVBQXNCO0FBQ3BCSTtBQUNELFNBRkQsTUFFTztBQUNMTyxtQkFBUyxLQUFLcEMsS0FBTCxDQUFXd0MsSUFBcEI7QUFDRDtBQUNGOztBQUVEO0FBQ0EsYUFBT0YsU0FBUyxDQUFULElBQWNDLFFBQVEsS0FBS3ZDLEtBQUwsQ0FBV00sSUFBeEMsRUFBOEM7QUFDNUMsWUFBSW9DLFFBQU8sS0FBS3pDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQm9DLE9BQWhCLEVBQXlCQyxPQUF6QixDQUFYOztBQUVBLFlBQUlHLFVBQVNqQixNQUFiLEVBQXFCO0FBQ25CSTtBQUNELFNBRkQsTUFFTztBQUNMUyxrQkFBUSxDQUFDLENBQVQ7QUFDRDtBQUNGO0FBQ0QsVUFBSVQsU0FBUyxDQUFiLEVBQWdCLE9BQU8sSUFBUDs7QUFFaEIsYUFBTyxLQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBRUksYUFBSzVCLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlMsR0FBaEIsQ0FBb0IsVUFBQ2dDLE1BQUQsRUFBU3hCLE1BQVQsRUFBb0I7QUFDdEMsaUJBQU8sb0JBQUMsSUFBRCxJQUFNLEtBQUtBLE1BQVgsRUFBbUIsUUFBUUEsTUFBM0IsRUFBbUMsUUFBUXdCLE1BQTNDO0FBQ0MsdUJBQVcsT0FBS0MsU0FBTCxDQUFlQyxJQUFmLFFBRFosR0FBUDtBQUVELFNBSEQ7QUFGSixPQURGO0FBVUQ7Ozs7RUFoTGlCQyxNQUFNQyxTIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBncmlkOiBBcnJheSh0aGlzLnByb3BzLmNvbHVtbnMpLmZpbGwoQXJyYXkodGhpcy5wcm9wcy5yb3dzKS5maWxsKG51bGwpKVxuICAgIH07XG4gIH1cblxuICBwbGF5UGllY2UoY29sLCByb3cpIHtcbiAgICBsZXQgY3VycmVudFBsYXllciA9IHRoaXMucHJvcHMuY3VycmVudFBsYXllcjtcbiAgICBsZXQgZ3JpZENvcHkgPSB0aGlzLnN0YXRlLmdyaWQubWFwKGFyciA9PiBhcnIuc2xpY2UoKSk7XG4gICAgZ3JpZENvcHlbY29sXVtyb3ddID0gY3VycmVudFBsYXllcjtcbiAgICB0aGlzLnNldFN0YXRlKHtncmlkOiBncmlkQ29weX0sIGZ1bmN0aW9uKCkge1xuICAgICAgaWYodGhpcy53aW5uaW5nTW92ZS5jYWxsKHRoaXMsIGNvbCwgcm93LCBjdXJyZW50UGxheWVyKSkgY29uc29sZS5sb2coJ3dpbm5lcicpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tTbG90KGNvbE51bSkge1xuICAgIC8vIGZpbmQgdGhlIGxvd2VzdC1kb3duIGVtcHR5IHNwb3RcbiAgICBsZXQgY29sdW1uID0gdGhpcy5zdGF0ZS5ncmlkW2NvbE51bV07XG4gICAgbGV0IGluc2VydFJvdyA9IGNvbHVtbi5pbmRleE9mKG51bGwpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBhbiBlbXB0eSBzcG90LCBwdXQgdGhlIHBpZWNlIHRoZXJlIGFuZCBjaGFuZ2UgdGhlIHBsYXllclxuICAgIGlmIChpbnNlcnRSb3cgIT09IC0xKSB7XG4gICAgICB0aGlzLnBsYXlQaWVjZShjb2xOdW0sIGluc2VydFJvdyk7XG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZVBsYXllcigpO1xuICAgIH1cbiAgfVxuXG4gIHdpbm5pbmdNb3ZlKGNvbCwgcm93LCBwbGF5ZXIpIHtcbiAgICBpZih0aGlzLmhvcml6b250YWxXaW4oY29sLCByb3csIHBsYXllcikgfHxcbiAgICAgICB0aGlzLnZlcnRpY2FsV2luKGNvbCwgcm93LCBwbGF5ZXIpIHx8XG4gICAgICAgdGhpcy5kaWFnb25hbFdpbihjb2wsIHJvdywgcGxheWVyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvcml6b250YWxXaW4oY29sLCByb3csIHBsYXllcikge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGkgPSBjb2w7XG4gICAgbGV0IGogPSBjb2wgLSAxO1xuXG4gICAgd2hpbGUgKGkgPCB0aGlzLnByb3BzLmNvbHVtbnMgfHwgaiA+PTApIHtcbiAgICAgIGxldCByaWdodENvbCA9IHRoaXMuc3RhdGUuZ3JpZFtpKytdO1xuICAgICAgbGV0IGxlZnRDb2wgPSB0aGlzLnN0YXRlLmdyaWRbai0tXTtcblxuICAgICAgaWYgKHJpZ2h0Q29sICYmIHJpZ2h0Q29sW3Jvd10gPT09IHBsYXllcikge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IHRoaXMucHJvcHMuY29sdW1ucztcbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0Q29sICYmIGxlZnRDb2xbcm93XSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA+PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmVydGljYWxXaW4oY29sLCByb3csIHBsYXllcikge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGkgPSByb3c7XG4gICAgbGV0IGogPSByb3cgLSAxO1xuXG4gICAgd2hpbGUgKGkgPCB0aGlzLnByb3BzLnJvd3MgfHwgaiA+PTApIHtcbiAgICAgIGxldCB0b3AgPSB0aGlzLnN0YXRlLmdyaWRbY29sXVtpKytdO1xuICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuc3RhdGUuZ3JpZFtjb2xdW2otLV07XG5cbiAgICAgIGlmICh0b3AgJiYgdG9wID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSB0aGlzLnByb3BzLnJvd3M7XG4gICAgICB9XG4gICAgICBpZiAoYm90dG9tICYmIGJvdHRvbSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA+PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkaWFnb25hbFdpbihjb2wsIHJvdywgcGxheWVyKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGxldCB4UmlnaHQgPSBjb2w7XG4gICAgbGV0IHlSaWdodCA9IHJvdztcblxuICAgIGxldCB4TGVmdCA9IGNvbCAtIDE7XG4gICAgbGV0IHlMZWZ0ID0gcm93IC0gMTtcblxuICAgIC8vIGdvIHJpZ2h0LXVwXG4gICAgd2hpbGUgKHhSaWdodCA8IHRoaXMucHJvcHMuY29scyAmJiB5UmlnaHQgPCB0aGlzLnByb3BzLnJvd3MpIHtcbiAgICAgIGxldCByaWdodCA9IHRoaXMuc3RhdGUuZ3JpZFt4UmlnaHRdW3lSaWdodF07XG5cbiAgICAgIGlmIChyaWdodCA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4UmlnaHQgPSB0aGlzLnByb3BzLmNvbHM7XG4gICAgICB9XG4gICAgICB4UmlnaHQrKztcbiAgICAgIHlSaWdodCsrO1xuICAgIH1cblxuICAgIC8vIGdvIGxlZnQtZG93blxuICAgIHdoaWxlICh4TGVmdCA+PSAwICYmIHlMZWZ0ID49IDApIHtcbiAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5ncmlkW3hMZWZ0XVt5TGVmdF07XG5cbiAgICAgIGlmIChsZWZ0ID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhMZWZ0ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHhMZWZ0LS07XG4gICAgICB5TGVmdC0tO1xuICAgIH1cbiAgICBpZiAoY291bnQgPj0gNCkgcmV0dXJuIHRydWU7XG5cblxuXG5cbiAgICBjb3VudCA9IDA7XG5cbiAgICB4UmlnaHQgPSBjb2w7XG4gICAgeVJpZ2h0ID0gcm93O1xuXG4gICAgeExlZnQgPSBjb2wgLSAxO1xuICAgIHlMZWZ0ID0gcm93IC0gMTtcblxuICAgIC8vIGdvIHJpZ2h0LWRvd25cbiAgICB3aGlsZSAoeFJpZ2h0IDwgdGhpcy5wcm9wcy5jb2xzICYmIHlSaWdodCA+PSAwKSB7XG4gICAgICBsZXQgcmlnaHQgPSB0aGlzLnN0YXRlLmdyaWRbeFJpZ2h0KytdW3lSaWdodC0tXTtcblxuICAgICAgaWYgKHJpZ2h0ID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhSaWdodCA9IHRoaXMucHJvcHMuY29scztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnbyBsZWZ0LXVwXG4gICAgd2hpbGUgKHhMZWZ0ID49IDAgJiYgeUxlZnQgPCB0aGlzLnByb3BzLnJvd3MpIHtcbiAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5ncmlkW3hMZWZ0LS1dW3lMZWZ0KytdO1xuXG4gICAgICBpZiAobGVmdCA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4TGVmdCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPj0gNCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuZ3JpZC5tYXAoKGNvbEFyciwgY29sTnVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFNsb3Qga2V5PXtjb2xOdW19IGNvbE51bT17Y29sTnVtfSBjb2xBcnI9e2NvbEFycn1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tTbG90PXt0aGlzLmNsaWNrU2xvdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il19
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
        if (this.winningMove.call(this, col, row, currentPlayer)) {
          this.props.setWinner(currentPlayer);
        }
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
      while (xRight < this.props.columns && yRight < this.props.rows) {
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

      // check the other direction
      count = 0;

      xRight = col;
      yRight = row;

      xLeft = col - 1;
      yLeft = row - 1;

      // go right-down
      while (xRight < this.props.columns && yRight >= 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJncmlkIiwiQXJyYXkiLCJjb2x1bW5zIiwiZmlsbCIsInJvd3MiLCJjb2wiLCJyb3ciLCJjdXJyZW50UGxheWVyIiwiZ3JpZENvcHkiLCJtYXAiLCJhcnIiLCJzbGljZSIsInNldFN0YXRlIiwid2lubmluZ01vdmUiLCJjYWxsIiwic2V0V2lubmVyIiwiY29sTnVtIiwiY29sdW1uIiwiaW5zZXJ0Um93IiwiaW5kZXhPZiIsInBsYXlQaWVjZSIsInRvZ2dsZVBsYXllciIsInBsYXllciIsImhvcml6b250YWxXaW4iLCJ2ZXJ0aWNhbFdpbiIsImRpYWdvbmFsV2luIiwiY291bnQiLCJpIiwiaiIsInJpZ2h0Q29sIiwibGVmdENvbCIsInRvcCIsImJvdHRvbSIsInhSaWdodCIsInlSaWdodCIsInhMZWZ0IiwieUxlZnQiLCJyaWdodCIsImNvbHMiLCJsZWZ0IiwiY29sQXJyIiwiY2xpY2tTbG90IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNQyxNQUFNLE1BQUtILEtBQUwsQ0FBV0ksT0FBakIsRUFBMEJDLElBQTFCLENBQStCRixNQUFNLE1BQUtILEtBQUwsQ0FBV00sSUFBakIsRUFBdUJELElBQXZCLENBQTRCLElBQTVCLENBQS9CO0FBREssS0FBYjtBQUhpQjtBQU1sQjs7Ozs4QkFFU0UsRyxFQUFLQyxHLEVBQUs7QUFDbEIsVUFBSUMsZ0JBQWdCLEtBQUtULEtBQUwsQ0FBV1MsYUFBL0I7QUFDQSxVQUFJQyxXQUFXLEtBQUtULEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlMsR0FBaEIsQ0FBb0I7QUFBQSxlQUFPQyxJQUFJQyxLQUFKLEVBQVA7QUFBQSxPQUFwQixDQUFm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QUVBO0FBQ0EsYUFBTzJCLFNBQVMsS0FBS25DLEtBQUwsQ0FBV0ksT0FBcEIsSUFBK0JnQyxVQUFVLENBQWhELEVBQW1EO0FBQ2pELFlBQUlHLFNBQVEsS0FBS3RDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmlDLFFBQWhCLEVBQTBCQyxRQUExQixDQUFaOztBQUVBLFlBQUlHLFdBQVVmLE1BQWQsRUFBc0I7QUFDcEJJO0FBQ0QsU0FGRCxNQUVPO0FBQ0xPLG1CQUFTLEtBQUtuQyxLQUFMLENBQVd3QyxJQUFwQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxhQUFPSCxTQUFTLENBQVQsSUFBY0MsUUFBUSxLQUFLdEMsS0FBTCxDQUFXTSxJQUF4QyxFQUE4QztBQUM1QyxZQUFJbUMsUUFBTyxLQUFLeEMsS0FBTCxDQUFXQyxJQUFYLENBQWdCbUMsT0FBaEIsRUFBeUJDLE9BQXpCLENBQVg7O0FBRUEsWUFBSUcsVUFBU2pCLE1BQWIsRUFBcUI7QUFDbkJJO0FBQ0QsU0FGRCxNQUVPO0FBQ0xTLGtCQUFRLENBQUMsQ0FBVDtBQUNEO0FBQ0Y7QUFDRCxVQUFJVCxTQUFTLENBQWIsRUFBZ0IsT0FBTyxJQUFQOztBQUVoQixhQUFPLEtBQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFFSSxhQUFLM0IsS0FBTCxDQUFXQyxJQUFYLENBQWdCUyxHQUFoQixDQUFvQixVQUFDK0IsTUFBRCxFQUFTeEIsTUFBVCxFQUFvQjtBQUN0QyxpQkFBTyxvQkFBQyxJQUFELElBQU0sS0FBS0EsTUFBWCxFQUFtQixRQUFRQSxNQUEzQixFQUFtQyxRQUFRd0IsTUFBM0M7QUFDQyx1QkFBVyxPQUFLQyxTQUFMLENBQWVDLElBQWYsUUFEWixHQUFQO0FBRUQsU0FIRDtBQUZKLE9BREY7QUFVRDs7OztFQWpMaUJDLE1BQU1DLFMiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdyaWQ6IEFycmF5KHRoaXMucHJvcHMuY29sdW1ucykuZmlsbChBcnJheSh0aGlzLnByb3BzLnJvd3MpLmZpbGwobnVsbCkpXG4gICAgfTtcbiAgfVxuXG4gIHBsYXlQaWVjZShjb2wsIHJvdykge1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gdGhpcy5wcm9wcy5jdXJyZW50UGxheWVyO1xuICAgIGxldCBncmlkQ29weSA9IHRoaXMuc3RhdGUuZ3JpZC5tYXAoYXJyID0+IGFyci5zbGljZSgpKTtcbiAgICBncmlkQ29weVtjb2xdW3Jvd10gPSBjdXJyZW50UGxheWVyO1xuICAgIHRoaXMuc2V0U3RhdGUoe2dyaWQ6IGdyaWRDb3B5fSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZih0aGlzLndpbm5pbmdNb3ZlLmNhbGwodGhpcywgY29sLCByb3csIGN1cnJlbnRQbGF5ZXIpKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0V2lubmVyKGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tTbG90KGNvbE51bSkge1xuICAgIC8vIGZpbmQgdGhlIGxvd2VzdC1kb3duIGVtcHR5IHNwb3RcbiAgICBsZXQgY29sdW1uID0gdGhpcy5zdGF0ZS5ncmlkW2NvbE51bV07XG4gICAgbGV0IGluc2VydFJvdyA9IGNvbHVtbi5pbmRleE9mKG51bGwpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBhbiBlbXB0eSBzcG90LCBwdXQgdGhlIHBpZWNlIHRoZXJlIGFuZCBjaGFuZ2UgdGhlIHBsYXllclxuICAgIGlmIChpbnNlcnRSb3cgIT09IC0xKSB7XG4gICAgICB0aGlzLnBsYXlQaWVjZShjb2xOdW0sIGluc2VydFJvdyk7XG4gICAgICB0aGlzLnByb3BzLnRvZ2dsZVBsYXllcigpO1xuICAgIH1cbiAgfVxuXG4gIHdpbm5pbmdNb3ZlKGNvbCwgcm93LCBwbGF5ZXIpIHtcbiAgICBpZih0aGlzLmhvcml6b250YWxXaW4oY29sLCByb3csIHBsYXllcikgfHxcbiAgICAgICB0aGlzLnZlcnRpY2FsV2luKGNvbCwgcm93LCBwbGF5ZXIpIHx8XG4gICAgICAgdGhpcy5kaWFnb25hbFdpbihjb2wsIHJvdywgcGxheWVyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhvcml6b250YWxXaW4oY29sLCByb3csIHBsYXllcikge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGkgPSBjb2w7XG4gICAgbGV0IGogPSBjb2wgLSAxO1xuXG4gICAgd2hpbGUgKGkgPCB0aGlzLnByb3BzLmNvbHVtbnMgfHwgaiA+PTApIHtcbiAgICAgIGxldCByaWdodENvbCA9IHRoaXMuc3RhdGUuZ3JpZFtpKytdO1xuICAgICAgbGV0IGxlZnRDb2wgPSB0aGlzLnN0YXRlLmdyaWRbai0tXTtcblxuICAgICAgaWYgKHJpZ2h0Q29sICYmIHJpZ2h0Q29sW3Jvd10gPT09IHBsYXllcikge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IHRoaXMucHJvcHMuY29sdW1ucztcbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0Q29sICYmIGxlZnRDb2xbcm93XSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA+PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmVydGljYWxXaW4oY29sLCByb3csIHBsYXllcikge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IGkgPSByb3c7XG4gICAgbGV0IGogPSByb3cgLSAxO1xuXG4gICAgd2hpbGUgKGkgPCB0aGlzLnByb3BzLnJvd3MgfHwgaiA+PTApIHtcbiAgICAgIGxldCB0b3AgPSB0aGlzLnN0YXRlLmdyaWRbY29sXVtpKytdO1xuICAgICAgbGV0IGJvdHRvbSA9IHRoaXMuc3RhdGUuZ3JpZFtjb2xdW2otLV07XG5cbiAgICAgIGlmICh0b3AgJiYgdG9wID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgPSB0aGlzLnByb3BzLnJvd3M7XG4gICAgICB9XG4gICAgICBpZiAoYm90dG9tICYmIGJvdHRvbSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBqID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA+PSA0KSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkaWFnb25hbFdpbihjb2wsIHJvdywgcGxheWVyKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGxldCB4UmlnaHQgPSBjb2w7XG4gICAgbGV0IHlSaWdodCA9IHJvdztcblxuICAgIGxldCB4TGVmdCA9IGNvbCAtIDE7XG4gICAgbGV0IHlMZWZ0ID0gcm93IC0gMTtcblxuICAgIC8vIGdvIHJpZ2h0LXVwXG4gICAgd2hpbGUgKHhSaWdodCA8IHRoaXMucHJvcHMuY29sdW1ucyAmJiB5UmlnaHQgPCB0aGlzLnByb3BzLnJvd3MpIHtcbiAgICAgIGxldCByaWdodCA9IHRoaXMuc3RhdGUuZ3JpZFt4UmlnaHRdW3lSaWdodF07XG5cbiAgICAgIGlmIChyaWdodCA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4UmlnaHQgPSB0aGlzLnByb3BzLmNvbHM7XG4gICAgICB9XG4gICAgICB4UmlnaHQrKztcbiAgICAgIHlSaWdodCsrO1xuICAgIH1cblxuICAgIC8vIGdvIGxlZnQtZG93blxuICAgIHdoaWxlICh4TGVmdCA+PSAwICYmIHlMZWZ0ID49IDApIHtcbiAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5ncmlkW3hMZWZ0XVt5TGVmdF07XG5cbiAgICAgIGlmIChsZWZ0ID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhMZWZ0ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIHhMZWZ0LS07XG4gICAgICB5TGVmdC0tO1xuICAgIH1cbiAgICBpZiAoY291bnQgPj0gNCkgcmV0dXJuIHRydWU7XG5cblxuICAgIC8vIGNoZWNrIHRoZSBvdGhlciBkaXJlY3Rpb25cbiAgICBjb3VudCA9IDA7XG5cbiAgICB4UmlnaHQgPSBjb2w7XG4gICAgeVJpZ2h0ID0gcm93O1xuXG4gICAgeExlZnQgPSBjb2wgLSAxO1xuICAgIHlMZWZ0ID0gcm93IC0gMTtcblxuICAgIC8vIGdvIHJpZ2h0LWRvd25cbiAgICB3aGlsZSAoeFJpZ2h0IDwgdGhpcy5wcm9wcy5jb2x1bW5zICYmIHlSaWdodCA+PSAwKSB7XG4gICAgICBsZXQgcmlnaHQgPSB0aGlzLnN0YXRlLmdyaWRbeFJpZ2h0KytdW3lSaWdodC0tXTtcblxuICAgICAgaWYgKHJpZ2h0ID09PSBwbGF5ZXIpIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhSaWdodCA9IHRoaXMucHJvcHMuY29scztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnbyBsZWZ0LXVwXG4gICAgd2hpbGUgKHhMZWZ0ID49IDAgJiYgeUxlZnQgPCB0aGlzLnByb3BzLnJvd3MpIHtcbiAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5ncmlkW3hMZWZ0LS1dW3lMZWZ0KytdO1xuXG4gICAgICBpZiAobGVmdCA9PT0gcGxheWVyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4TGVmdCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPj0gNCkgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuZ3JpZC5tYXAoKGNvbEFyciwgY29sTnVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFNsb3Qga2V5PXtjb2xOdW19IGNvbE51bT17Y29sTnVtfSBjb2xBcnI9e2NvbEFycn1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tTbG90PXt0aGlzLmNsaWNrU2xvdC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==
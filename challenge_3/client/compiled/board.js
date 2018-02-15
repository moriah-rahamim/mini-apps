'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));

    _this.columns = 7;
    _this.rows = 6;
    _this.playerAfter = {
      red: 'black',
      black: 'red'
    };

    _this.state = {
      board: Array(_this.columns).fill(Array(_this.rows).fill(null)),
      player: 'red'
    };
    return _this;
  }

  _createClass(Board, [{
    key: 'playPiece',
    value: function playPiece(col, row) {
      var player = this.state.player;
      var boardCopy = this.state.board.map(function (arr) {
        return arr.slice();
      });
      boardCopy[col][row] = player;
      this.setState({ board: boardCopy });
    }
  }, {
    key: 'clickSlot',
    value: function clickSlot(colNum) {
      // find the lowest-down empty spot
      var column = this.state.board[colNum];
      var insertRow = column.indexOf(null);

      // if there's an empty spot, put the piece there and change the player
      if (insertRow !== -1) {
        this.playPiece(colNum, insertRow);
        this.setState({ player: this.playerAfter[this.state.player] });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'board' },
        this.state.board.map(function (colArr, colNum) {
          return React.createElement(Slot, { key: colNum, colNum: colNum, colArr: colArr,
            clickSlot: _this2.clickSlot.bind(_this2) });
        })
      );
    }
  }]);

  return Board;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiY29sdW1ucyIsInJvd3MiLCJwbGF5ZXJBZnRlciIsInJlZCIsImJsYWNrIiwic3RhdGUiLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsInBsYXllciIsImNvbCIsInJvdyIsImJvYXJkQ29weSIsIm1hcCIsImFyciIsInNsaWNlIiwic2V0U3RhdGUiLCJjb2xOdW0iLCJjb2x1bW4iLCJpbnNlcnRSb3ciLCJpbmRleE9mIiwicGxheVBpZWNlIiwiY29sQXJyIiwiY2xpY2tTbG90IiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxVQUFLQyxXQUFMLEdBQW1CO0FBQ2pCQyxXQUFLLE9BRFk7QUFFakJDLGFBQU87QUFGVSxLQUFuQjs7QUFLQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBT0MsTUFBTSxNQUFLUCxPQUFYLEVBQW9CUSxJQUFwQixDQUF5QkQsTUFBTSxNQUFLTixJQUFYLEVBQWlCTyxJQUFqQixDQUFzQixJQUF0QixDQUF6QixDQURJO0FBRVhDLGNBQVE7QUFGRyxLQUFiO0FBVmlCO0FBY2xCOzs7OzhCQUVTQyxHLEVBQUtDLEcsRUFBSztBQUNsQixVQUFJRixTQUFTLEtBQUtKLEtBQUwsQ0FBV0ksTUFBeEI7QUFDQSxVQUFJRyxZQUFZLEtBQUtQLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQk8sR0FBakIsQ0FBcUI7QUFBQSxlQUFPQyxJQUFJQyxLQUFKLEVBQVA7QUFBQSxPQUFyQixDQUFoQjtBQUNBSCxnQkFBVUYsR0FBVixFQUFlQyxHQUFmLElBQXNCRixNQUF0QjtBQUNBLFdBQUtPLFFBQUwsQ0FBYyxFQUFDVixPQUFPTSxTQUFSLEVBQWQ7QUFDRDs7OzhCQUVTSyxNLEVBQVE7QUFDaEI7QUFDQSxVQUFJQyxTQUFTLEtBQUtiLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlcsTUFBakIsQ0FBYjtBQUNBLFVBQUlFLFlBQVlELE9BQU9FLE9BQVAsQ0FBZSxJQUFmLENBQWhCOztBQUVBO0FBQ0EsVUFBSUQsY0FBYyxDQUFDLENBQW5CLEVBQXNCO0FBQ3BCLGFBQUtFLFNBQUwsQ0FBZUosTUFBZixFQUF1QkUsU0FBdkI7QUFDQSxhQUFLSCxRQUFMLENBQWMsRUFBQ1AsUUFBUSxLQUFLUCxXQUFMLENBQWlCLEtBQUtHLEtBQUwsQ0FBV0ksTUFBNUIsQ0FBVCxFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFFSSxhQUFLSixLQUFMLENBQVdDLEtBQVgsQ0FBaUJPLEdBQWpCLENBQXFCLFVBQUNTLE1BQUQsRUFBU0wsTUFBVCxFQUFvQjtBQUN2QyxpQkFBTyxvQkFBQyxJQUFELElBQU0sS0FBS0EsTUFBWCxFQUFtQixRQUFRQSxNQUEzQixFQUFtQyxRQUFRSyxNQUEzQztBQUNDLHVCQUFXLE9BQUtDLFNBQUwsQ0FBZUMsSUFBZixRQURaLEdBQVA7QUFFRCxTQUhEO0FBRkosT0FERjtBQVVEOzs7O0VBL0NpQkMsTUFBTUMsUyIsImZpbGUiOiJib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbHVtbnMgPSA3O1xuICAgIHRoaXMucm93cyA9IDY7XG4gICAgdGhpcy5wbGF5ZXJBZnRlciA9IHtcbiAgICAgIHJlZDogJ2JsYWNrJyxcbiAgICAgIGJsYWNrOiAncmVkJ1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IEFycmF5KHRoaXMuY29sdW1ucykuZmlsbChBcnJheSh0aGlzLnJvd3MpLmZpbGwobnVsbCkpLFxuICAgICAgcGxheWVyOiAncmVkJ1xuICAgIH07XG4gIH1cblxuICBwbGF5UGllY2UoY29sLCByb3cpIHtcbiAgICBsZXQgcGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXI7XG4gICAgbGV0IGJvYXJkQ29weSA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKGFyciA9PiBhcnIuc2xpY2UoKSk7XG4gICAgYm9hcmRDb3B5W2NvbF1bcm93XSA9IHBsYXllcjtcbiAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogYm9hcmRDb3B5fSk7XG4gIH1cblxuICBjbGlja1Nsb3QoY29sTnVtKSB7XG4gICAgLy8gZmluZCB0aGUgbG93ZXN0LWRvd24gZW1wdHkgc3BvdFxuICAgIGxldCBjb2x1bW4gPSB0aGlzLnN0YXRlLmJvYXJkW2NvbE51bV07XG4gICAgbGV0IGluc2VydFJvdyA9IGNvbHVtbi5pbmRleE9mKG51bGwpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBhbiBlbXB0eSBzcG90LCBwdXQgdGhlIHBpZWNlIHRoZXJlIGFuZCBjaGFuZ2UgdGhlIHBsYXllclxuICAgIGlmIChpbnNlcnRSb3cgIT09IC0xKSB7XG4gICAgICB0aGlzLnBsYXlQaWVjZShjb2xOdW0sIGluc2VydFJvdyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXI6IHRoaXMucGxheWVyQWZ0ZXJbdGhpcy5zdGF0ZS5wbGF5ZXJdfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmJvYXJkLm1hcCgoY29sQXJyLCBjb2xOdW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8U2xvdCBrZXk9e2NvbE51bX0gY29sTnVtPXtjb2xOdW19IGNvbEFycj17Y29sQXJyfVxuICAgICAgICAgICAgICAgICAgICBjbGlja1Nsb3Q9e3RoaXMuY2xpY2tTbG90LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXX0=
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
      red: 'yellow',
      yellow: 'red'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiY29sdW1ucyIsInJvd3MiLCJwbGF5ZXJBZnRlciIsInJlZCIsInllbGxvdyIsInN0YXRlIiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJwbGF5ZXIiLCJjb2wiLCJyb3ciLCJib2FyZENvcHkiLCJtYXAiLCJhcnIiLCJzbGljZSIsInNldFN0YXRlIiwiY29sTnVtIiwiY29sdW1uIiwiaW5zZXJ0Um93IiwiaW5kZXhPZiIsInBsYXlQaWVjZSIsImNvbEFyciIsImNsaWNrU2xvdCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFVBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQjtBQUNqQkMsV0FBSyxRQURZO0FBRWpCQyxjQUFRO0FBRlMsS0FBbkI7O0FBS0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLE1BQU0sTUFBS1AsT0FBWCxFQUFvQlEsSUFBcEIsQ0FBeUJELE1BQU0sTUFBS04sSUFBWCxFQUFpQk8sSUFBakIsQ0FBc0IsSUFBdEIsQ0FBekIsQ0FESTtBQUVYQyxjQUFRO0FBRkcsS0FBYjtBQVZpQjtBQWNsQjs7Ozs4QkFFU0MsRyxFQUFLQyxHLEVBQUs7QUFDbEIsVUFBSUYsU0FBUyxLQUFLSixLQUFMLENBQVdJLE1BQXhCO0FBQ0EsVUFBSUcsWUFBWSxLQUFLUCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJPLEdBQWpCLENBQXFCO0FBQUEsZUFBT0MsSUFBSUMsS0FBSixFQUFQO0FBQUEsT0FBckIsQ0FBaEI7QUFDQUgsZ0JBQVVGLEdBQVYsRUFBZUMsR0FBZixJQUFzQkYsTUFBdEI7QUFDQSxXQUFLTyxRQUFMLENBQWMsRUFBQ1YsT0FBT00sU0FBUixFQUFkO0FBQ0Q7Ozs4QkFFU0ssTSxFQUFRO0FBQ2hCO0FBQ0EsVUFBSUMsU0FBUyxLQUFLYixLQUFMLENBQVdDLEtBQVgsQ0FBaUJXLE1BQWpCLENBQWI7QUFDQSxVQUFJRSxZQUFZRCxPQUFPRSxPQUFQLENBQWUsSUFBZixDQUFoQjs7QUFFQTtBQUNBLFVBQUlELGNBQWMsQ0FBQyxDQUFuQixFQUFzQjtBQUNwQixhQUFLRSxTQUFMLENBQWVKLE1BQWYsRUFBdUJFLFNBQXZCO0FBQ0EsYUFBS0gsUUFBTCxDQUFjLEVBQUNQLFFBQVEsS0FBS1AsV0FBTCxDQUFpQixLQUFLRyxLQUFMLENBQVdJLE1BQTVCLENBQVQsRUFBZDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxPQUFmO0FBRUksYUFBS0osS0FBTCxDQUFXQyxLQUFYLENBQWlCTyxHQUFqQixDQUFxQixVQUFDUyxNQUFELEVBQVNMLE1BQVQsRUFBb0I7QUFDdkMsaUJBQU8sb0JBQUMsSUFBRCxJQUFNLEtBQUtBLE1BQVgsRUFBbUIsUUFBUUEsTUFBM0IsRUFBbUMsUUFBUUssTUFBM0M7QUFDQyx1QkFBVyxPQUFLQyxTQUFMLENBQWVDLElBQWYsUUFEWixHQUFQO0FBRUQsU0FIRDtBQUZKLE9BREY7QUFVRDs7OztFQS9DaUJDLE1BQU1DLFMiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb2x1bW5zID0gNztcbiAgICB0aGlzLnJvd3MgPSA2O1xuICAgIHRoaXMucGxheWVyQWZ0ZXIgPSB7XG4gICAgICByZWQ6ICd5ZWxsb3cnLFxuICAgICAgeWVsbG93OiAncmVkJ1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IEFycmF5KHRoaXMuY29sdW1ucykuZmlsbChBcnJheSh0aGlzLnJvd3MpLmZpbGwobnVsbCkpLFxuICAgICAgcGxheWVyOiAncmVkJ1xuICAgIH07XG4gIH1cblxuICBwbGF5UGllY2UoY29sLCByb3cpIHtcbiAgICBsZXQgcGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXI7XG4gICAgbGV0IGJvYXJkQ29weSA9IHRoaXMuc3RhdGUuYm9hcmQubWFwKGFyciA9PiBhcnIuc2xpY2UoKSk7XG4gICAgYm9hcmRDb3B5W2NvbF1bcm93XSA9IHBsYXllcjtcbiAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogYm9hcmRDb3B5fSk7XG4gIH1cblxuICBjbGlja1Nsb3QoY29sTnVtKSB7XG4gICAgLy8gZmluZCB0aGUgbG93ZXN0LWRvd24gZW1wdHkgc3BvdFxuICAgIGxldCBjb2x1bW4gPSB0aGlzLnN0YXRlLmJvYXJkW2NvbE51bV07XG4gICAgbGV0IGluc2VydFJvdyA9IGNvbHVtbi5pbmRleE9mKG51bGwpO1xuXG4gICAgLy8gaWYgdGhlcmUncyBhbiBlbXB0eSBzcG90LCBwdXQgdGhlIHBpZWNlIHRoZXJlIGFuZCBjaGFuZ2UgdGhlIHBsYXllclxuICAgIGlmIChpbnNlcnRSb3cgIT09IC0xKSB7XG4gICAgICB0aGlzLnBsYXlQaWVjZShjb2xOdW0sIGluc2VydFJvdyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXI6IHRoaXMucGxheWVyQWZ0ZXJbdGhpcy5zdGF0ZS5wbGF5ZXJdfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmJvYXJkLm1hcCgoY29sQXJyLCBjb2xOdW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8U2xvdCBrZXk9e2NvbE51bX0gY29sTnVtPXtjb2xOdW19IGNvbEFycj17Y29sQXJyfVxuICAgICAgICAgICAgICAgICAgICBjbGlja1Nsb3Q9e3RoaXMuY2xpY2tTbG90LmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0iXX0=
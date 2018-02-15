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
      this.setState({ grid: gridCopy });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJncmlkIiwiQXJyYXkiLCJjb2x1bW5zIiwiZmlsbCIsInJvd3MiLCJjb2wiLCJyb3ciLCJjdXJyZW50UGxheWVyIiwiZ3JpZENvcHkiLCJtYXAiLCJhcnIiLCJzbGljZSIsInNldFN0YXRlIiwiY29sTnVtIiwiY29sdW1uIiwiaW5zZXJ0Um93IiwiaW5kZXhPZiIsInBsYXlQaWVjZSIsInRvZ2dsZVBsYXllciIsImNvbEFyciIsImNsaWNrU2xvdCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsTUFBTSxNQUFLSCxLQUFMLENBQVdJLE9BQWpCLEVBQTBCQyxJQUExQixDQUErQkYsTUFBTSxNQUFLSCxLQUFMLENBQVdNLElBQWpCLEVBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUEvQjtBQURLLEtBQWI7QUFIaUI7QUFNbEI7Ozs7OEJBRVNFLEcsRUFBS0MsRyxFQUFLO0FBQ2xCLFVBQUlDLGdCQUFnQixLQUFLVCxLQUFMLENBQVdTLGFBQS9CO0FBQ0EsVUFBSUMsV0FBVyxLQUFLVCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JTLEdBQWhCLENBQW9CO0FBQUEsZUFBT0MsSUFBSUMsS0FBSixFQUFQO0FBQUEsT0FBcEIsQ0FBZjtBQUNBSCxlQUFTSCxHQUFULEVBQWNDLEdBQWQsSUFBcUJDLGFBQXJCO0FBQ0EsV0FBS0ssUUFBTCxDQUFjLEVBQUNaLE1BQU1RLFFBQVAsRUFBZDtBQUNEOzs7OEJBRVNLLE0sRUFBUTtBQUNoQjtBQUNBLFVBQUlDLFNBQVMsS0FBS2YsS0FBTCxDQUFXQyxJQUFYLENBQWdCYSxNQUFoQixDQUFiO0FBQ0EsVUFBSUUsWUFBWUQsT0FBT0UsT0FBUCxDQUFlLElBQWYsQ0FBaEI7O0FBRUE7QUFDQSxVQUFJRCxjQUFjLENBQUMsQ0FBbkIsRUFBc0I7QUFDcEIsYUFBS0UsU0FBTCxDQUFlSixNQUFmLEVBQXVCRSxTQUF2QjtBQUNBLGFBQUtqQixLQUFMLENBQVdvQixZQUFYO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFFSSxhQUFLbkIsS0FBTCxDQUFXQyxJQUFYLENBQWdCUyxHQUFoQixDQUFvQixVQUFDVSxNQUFELEVBQVNOLE1BQVQsRUFBb0I7QUFDdEMsaUJBQU8sb0JBQUMsSUFBRCxJQUFNLEtBQUtBLE1BQVgsRUFBbUIsUUFBUUEsTUFBM0IsRUFBbUMsUUFBUU0sTUFBM0M7QUFDQyx1QkFBVyxPQUFLQyxTQUFMLENBQWVDLElBQWYsUUFEWixHQUFQO0FBRUQsU0FIRDtBQUZKLE9BREY7QUFVRDs7OztFQXZDaUJDLE1BQU1DLFMiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdyaWQ6IEFycmF5KHRoaXMucHJvcHMuY29sdW1ucykuZmlsbChBcnJheSh0aGlzLnByb3BzLnJvd3MpLmZpbGwobnVsbCkpXG4gICAgfTtcbiAgfVxuXG4gIHBsYXlQaWVjZShjb2wsIHJvdykge1xuICAgIGxldCBjdXJyZW50UGxheWVyID0gdGhpcy5wcm9wcy5jdXJyZW50UGxheWVyO1xuICAgIGxldCBncmlkQ29weSA9IHRoaXMuc3RhdGUuZ3JpZC5tYXAoYXJyID0+IGFyci5zbGljZSgpKTtcbiAgICBncmlkQ29weVtjb2xdW3Jvd10gPSBjdXJyZW50UGxheWVyO1xuICAgIHRoaXMuc2V0U3RhdGUoe2dyaWQ6IGdyaWRDb3B5fSk7XG4gIH1cblxuICBjbGlja1Nsb3QoY29sTnVtKSB7XG4gICAgLy8gZmluZCB0aGUgbG93ZXN0LWRvd24gZW1wdHkgc3BvdFxuICAgIGxldCBjb2x1bW4gPSB0aGlzLnN0YXRlLmdyaWRbY29sTnVtXTtcbiAgICBsZXQgaW5zZXJ0Um93ID0gY29sdW1uLmluZGV4T2YobnVsbCk7XG5cbiAgICAvLyBpZiB0aGVyZSdzIGFuIGVtcHR5IHNwb3QsIHB1dCB0aGUgcGllY2UgdGhlcmUgYW5kIGNoYW5nZSB0aGUgcGxheWVyXG4gICAgaWYgKGluc2VydFJvdyAhPT0gLTEpIHtcbiAgICAgIHRoaXMucGxheVBpZWNlKGNvbE51bSwgaW5zZXJ0Um93KTtcbiAgICAgIHRoaXMucHJvcHMudG9nZ2xlUGxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmdyaWQubWFwKChjb2xBcnIsIGNvbE51bSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxTbG90IGtleT17Y29sTnVtfSBjb2xOdW09e2NvbE51bX0gY29sQXJyPXtjb2xBcnJ9XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrU2xvdD17dGhpcy5jbGlja1Nsb3QuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdfQ==
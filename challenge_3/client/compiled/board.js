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
    key: 'addPiece',
    value: function addPiece(player, col, row) {
      var boardCopy = this.state.board.map(function (arr) {
        return arr.slice();
      });
      boardCopy[col][row] = player;
      this.setState({ board: boardCopy });
    }
  }, {
    key: 'columnClick',
    value: function columnClick(colNum) {
      var column = this.state.board[colNum];
      var player = this.state.player;
      var insertIdx = column.indexOf(null);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('hello world');
      this.addPiece('red', 0, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'board' },
        this.state.board.map(function (colArr, colNum) {
          return React.createElement(Slot, { key: colNum, colNum: colNum, colArr: colArr });
        })
      );
    }
  }]);

  return Board;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiY29sdW1ucyIsInJvd3MiLCJwbGF5ZXJBZnRlciIsInJlZCIsImJsYWNrIiwic3RhdGUiLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsInBsYXllciIsImNvbCIsInJvdyIsImJvYXJkQ29weSIsIm1hcCIsImFyciIsInNsaWNlIiwic2V0U3RhdGUiLCJjb2xOdW0iLCJjb2x1bW4iLCJpbnNlcnRJZHgiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImFkZFBpZWNlIiwiY29sQXJyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxVQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtDLFdBQUwsR0FBbUI7QUFDakJDLFdBQUssT0FEWTtBQUVqQkMsYUFBTztBQUZVLEtBQW5COztBQUtBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPQyxNQUFNLE1BQUtQLE9BQVgsRUFBb0JRLElBQXBCLENBQXlCRCxNQUFNLE1BQUtOLElBQVgsRUFBaUJPLElBQWpCLENBQXNCLElBQXRCLENBQXpCLENBREk7QUFFWEMsY0FBUTtBQUZHLEtBQWI7QUFWaUI7QUFjbEI7Ozs7NkJBRVFBLE0sRUFBUUMsRyxFQUFLQyxHLEVBQUs7QUFDekIsVUFBSUMsWUFBWSxLQUFLUCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJPLEdBQWpCLENBQXFCO0FBQUEsZUFBT0MsSUFBSUMsS0FBSixFQUFQO0FBQUEsT0FBckIsQ0FBaEI7QUFDQUgsZ0JBQVVGLEdBQVYsRUFBZUMsR0FBZixJQUFzQkYsTUFBdEI7QUFDQSxXQUFLTyxRQUFMLENBQWMsRUFBQ1YsT0FBT00sU0FBUixFQUFkO0FBQ0Q7OztnQ0FFV0ssTSxFQUFRO0FBQ2xCLFVBQUlDLFNBQVMsS0FBS2IsS0FBTCxDQUFXQyxLQUFYLENBQWlCVyxNQUFqQixDQUFiO0FBQ0EsVUFBSVIsU0FBUyxLQUFLSixLQUFMLENBQVdJLE1BQXhCO0FBQ0EsVUFBSVUsWUFBWUQsT0FBT0UsT0FBUCxDQUFlLElBQWYsQ0FBaEI7QUFFRDs7O3dDQUVtQjtBQUNsQkMsY0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxXQUFLQyxRQUFMLENBQWMsS0FBZCxFQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsT0FBZjtBQUVJLGFBQUtsQixLQUFMLENBQVdDLEtBQVgsQ0FBaUJPLEdBQWpCLENBQXFCLFVBQUNXLE1BQUQsRUFBU1AsTUFBVCxFQUFvQjtBQUN2QyxpQkFBTyxvQkFBQyxJQUFELElBQU0sS0FBS0EsTUFBWCxFQUFtQixRQUFRQSxNQUEzQixFQUFtQyxRQUFRTyxNQUEzQyxHQUFQO0FBQ0QsU0FGRDtBQUZKLE9BREY7QUFTRDs7OztFQTdDaUJDLE1BQU1DLFMiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb2x1bW5zID0gNztcbiAgICB0aGlzLnJvd3MgPSA2O1xuICAgIHRoaXMucGxheWVyQWZ0ZXIgPSB7XG4gICAgICByZWQ6ICdibGFjaycsXG4gICAgICBibGFjazogJ3JlZCdcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBBcnJheSh0aGlzLmNvbHVtbnMpLmZpbGwoQXJyYXkodGhpcy5yb3dzKS5maWxsKG51bGwpKSxcbiAgICAgIHBsYXllcjogJ3JlZCdcbiAgICB9O1xuICB9XG5cbiAgYWRkUGllY2UocGxheWVyLCBjb2wsIHJvdykge1xuICAgIGxldCBib2FyZENvcHkgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcChhcnIgPT4gYXJyLnNsaWNlKCkpO1xuICAgIGJvYXJkQ29weVtjb2xdW3Jvd10gPSBwbGF5ZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IGJvYXJkQ29weX0pO1xuICB9XG5cbiAgY29sdW1uQ2xpY2soY29sTnVtKSB7XG4gICAgbGV0IGNvbHVtbiA9IHRoaXMuc3RhdGUuYm9hcmRbY29sTnVtXTtcbiAgICBsZXQgcGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXI7XG4gICAgbGV0IGluc2VydElkeCA9IGNvbHVtbi5pbmRleE9mKG51bGwpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbiAgICB0aGlzLmFkZFBpZWNlKCdyZWQnLCAwLCAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5ib2FyZC5tYXAoKGNvbEFyciwgY29sTnVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFNsb3Qga2V5PXtjb2xOdW19IGNvbE51bT17Y29sTnVtfSBjb2xBcnI9e2NvbEFycn0vPlxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufSJdfQ==
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

    _this.state = {
      board: Array(_this.columns).fill(Array(_this.rows).fill(null))
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
    key: 'renderSlots',
    value: function renderSlots() {}
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
        React.createElement(Slot, { col: 1 }),
        React.createElement(Slot, { col: 2 }),
        React.createElement(Slot, { col: 3 }),
        React.createElement(Slot, { col: 4 }),
        React.createElement(Slot, { col: 5 }),
        React.createElement(Slot, { col: 6 }),
        React.createElement(Slot, { col: 7 })
      );
    }
  }]);

  return Board;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzeCJdLCJuYW1lcyI6WyJCb2FyZCIsInByb3BzIiwiY29sdW1ucyIsInJvd3MiLCJzdGF0ZSIsImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwicGxheWVyIiwiY29sIiwicm93IiwiYm9hcmRDb3B5IiwibWFwIiwiYXJyIiwic2xpY2UiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRQaWVjZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLENBQVo7O0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLE1BQU0sTUFBS0osT0FBWCxFQUFvQkssSUFBcEIsQ0FBeUJELE1BQU0sTUFBS0gsSUFBWCxFQUFpQkksSUFBakIsQ0FBc0IsSUFBdEIsQ0FBekI7QUFESSxLQUFiO0FBTmlCO0FBU2xCOzs7OzZCQUVRQyxNLEVBQVFDLEcsRUFBS0MsRyxFQUFLO0FBQ3pCLFVBQUlDLFlBQVksS0FBS1AsS0FBTCxDQUFXQyxLQUFYLENBQWlCTyxHQUFqQixDQUFxQjtBQUFBLGVBQU9DLElBQUlDLEtBQUosRUFBUDtBQUFBLE9BQXJCLENBQWhCO0FBQ0FILGdCQUFVRixHQUFWLEVBQWVDLEdBQWYsSUFBc0JGLE1BQXRCO0FBQ0EsV0FBS08sUUFBTCxDQUFjLEVBQUNWLE9BQU9NLFNBQVIsRUFBZDtBQUNEOzs7a0NBRWEsQ0FFYjs7O3dDQUVtQjtBQUNsQkssY0FBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxXQUFLQyxRQUFMLENBQWMsS0FBZCxFQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsT0FBZjtBQUNFLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FERjtBQUVFLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FGRjtBQUdFLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FIRjtBQUlFLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FKRjtBQUtFLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FMRjtBQU1FLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVgsR0FORjtBQU9FLDRCQUFDLElBQUQsSUFBTSxLQUFLLENBQVg7QUFQRixPQURGO0FBV0Q7Ozs7RUF2Q2lCQyxNQUFNQyxTIiwiZmlsZSI6ImJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29sdW1ucyA9IDc7XG4gICAgdGhpcy5yb3dzID0gNjtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBib2FyZDogQXJyYXkodGhpcy5jb2x1bW5zKS5maWxsKEFycmF5KHRoaXMucm93cykuZmlsbChudWxsKSlcbiAgICB9O1xuICB9XG5cbiAgYWRkUGllY2UocGxheWVyLCBjb2wsIHJvdykge1xuICAgIGxldCBib2FyZENvcHkgPSB0aGlzLnN0YXRlLmJvYXJkLm1hcChhcnIgPT4gYXJyLnNsaWNlKCkpO1xuICAgIGJvYXJkQ29weVtjb2xdW3Jvd10gPSBwbGF5ZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Ym9hcmQ6IGJvYXJkQ29weX0pO1xuICB9XG5cbiAgcmVuZGVyU2xvdHMoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbyB3b3JsZCcpO1xuICAgIHRoaXMuYWRkUGllY2UoJ3JlZCcsIDAsIDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XG4gICAgICAgIDxTbG90IGNvbD17MX0vPlxuICAgICAgICA8U2xvdCBjb2w9ezJ9Lz5cbiAgICAgICAgPFNsb3QgY29sPXszfS8+XG4gICAgICAgIDxTbG90IGNvbD17NH0vPlxuICAgICAgICA8U2xvdCBjb2w9ezV9Lz5cbiAgICAgICAgPFNsb3QgY29sPXs2fS8+XG4gICAgICAgIDxTbG90IGNvbD17N30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59Il19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.columns = 7;
    _this.rows = 6;

    _this.playerAfter = {
      red: 'yellow',
      yellow: 'red'
    };

    _this.state = {
      player: 'red',
      winner: null
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'setWinner',
    value: function setWinner(player) {
      this.setState({ winner: player });
    }
  }, {
    key: 'togglePlayer',
    value: function togglePlayer() {
      this.setState({ player: this.playerAfter[this.state.player] });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'game' },
        React.createElement(
          'h1',
          null,
          'Connect Four'
        ),
        React.createElement(
          'h2',
          { className: 'turns ' + this.state.player },
          'Your Turn: ',
          this.state.player.toUpperCase()
        ),
        React.createElement(
          'h2',
          { display: 'none', className: 'winner' },
          this.state.winMessage
        ),
        React.createElement(Board, { rows: this.rows, columns: this.columns,
          togglePlayer: this.togglePlayer.bind(this),
          setWinner: this.setWinner.bind(this),
          currentPlayer: this.state.player })
      );
    }
  }]);

  return Game;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dhbWUuanN4Il0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsImNvbHVtbnMiLCJyb3dzIiwicGxheWVyQWZ0ZXIiLCJyZWQiLCJ5ZWxsb3ciLCJzdGF0ZSIsInBsYXllciIsIndpbm5lciIsInNldFN0YXRlIiwidG9VcHBlckNhc2UiLCJ3aW5NZXNzYWdlIiwidG9nZ2xlUGxheWVyIiwiYmluZCIsInNldFdpbm5lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLENBQVo7O0FBRUEsVUFBS0MsV0FBTCxHQUFtQjtBQUNqQkMsV0FBSyxRQURZO0FBRWpCQyxjQUFRO0FBRlMsS0FBbkI7O0FBS0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsS0FERztBQUVYQyxjQUFRO0FBRkcsS0FBYjtBQVhpQjtBQWVsQjs7Ozs4QkFFU0QsTSxFQUFRO0FBQ2hCLFdBQUtFLFFBQUwsQ0FBYyxFQUFDRCxRQUFRRCxNQUFULEVBQWQ7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0UsUUFBTCxDQUFjLEVBQUNGLFFBQVEsS0FBS0osV0FBTCxDQUFpQixLQUFLRyxLQUFMLENBQVdDLE1BQTVCLENBQVQsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLHNCQUFvQixLQUFLRCxLQUFMLENBQVdDLE1BQW5DO0FBQUE7QUFBeUQsZUFBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCRyxXQUFsQjtBQUF6RCxTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUksU0FBUSxNQUFaLEVBQW1CLFdBQVUsUUFBN0I7QUFBdUMsZUFBS0osS0FBTCxDQUFXSztBQUFsRCxTQUhGO0FBSUUsNEJBQUMsS0FBRCxJQUFPLE1BQU0sS0FBS1QsSUFBbEIsRUFBd0IsU0FBUyxLQUFLRCxPQUF0QztBQUNBLHdCQUFjLEtBQUtXLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRGQ7QUFFQSxxQkFBVyxLQUFLQyxTQUFMLENBQWVELElBQWYsQ0FBb0IsSUFBcEIsQ0FGWDtBQUdBLHlCQUFlLEtBQUtQLEtBQUwsQ0FBV0MsTUFIMUI7QUFKRixPQURGO0FBV0Q7Ozs7RUF0Q2dCUSxNQUFNQyxTIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbHVtbnMgPSA3O1xuICAgIHRoaXMucm93cyA9IDY7XG5cbiAgICB0aGlzLnBsYXllckFmdGVyID0ge1xuICAgICAgcmVkOiAneWVsbG93JyxcbiAgICAgIHllbGxvdzogJ3JlZCdcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXllcjogJ3JlZCcsXG4gICAgICB3aW5uZXI6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc2V0V2lubmVyKHBsYXllcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe3dpbm5lcjogcGxheWVyfSk7XG4gIH1cblxuICB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyOiB0aGlzLnBsYXllckFmdGVyW3RoaXMuc3RhdGUucGxheWVyXX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgPGgxPkNvbm5lY3QgRm91cjwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2B0dXJucyAke3RoaXMuc3RhdGUucGxheWVyfWB9PllvdXIgVHVybjoge3RoaXMuc3RhdGUucGxheWVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgPGgyIGRpc3BsYXk9XCJub25lXCIgY2xhc3NOYW1lPVwid2lubmVyXCI+e3RoaXMuc3RhdGUud2luTWVzc2FnZX08L2gyPlxuICAgICAgICA8Qm9hcmQgcm93cz17dGhpcy5yb3dzfSBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9IFxuICAgICAgICB0b2dnbGVQbGF5ZXI9e3RoaXMudG9nZ2xlUGxheWVyLmJpbmQodGhpcyl9XG4gICAgICAgIHNldFdpbm5lcj17dGhpcy5zZXRXaW5uZXIuYmluZCh0aGlzKX0gXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI9e3RoaXMuc3RhdGUucGxheWVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==
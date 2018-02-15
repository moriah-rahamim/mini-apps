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
      winner: null,
      winnerDisplay: "none"
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'setWinner',
    value: function setWinner(player) {
      this.setState({ winner: player, winnerDisplay: 'block' });
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
          { display: this.state.winnerDisplay, className: 'winner' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dhbWUuanN4Il0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsImNvbHVtbnMiLCJyb3dzIiwicGxheWVyQWZ0ZXIiLCJyZWQiLCJ5ZWxsb3ciLCJzdGF0ZSIsInBsYXllciIsIndpbm5lciIsIndpbm5lckRpc3BsYXkiLCJzZXRTdGF0ZSIsInRvVXBwZXJDYXNlIiwid2luTWVzc2FnZSIsInRvZ2dsZVBsYXllciIsImJpbmQiLCJzZXRXaW5uZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYQSxLQURXOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFVBQUtDLElBQUwsR0FBWSxDQUFaOztBQUVBLFVBQUtDLFdBQUwsR0FBbUI7QUFDakJDLFdBQUssUUFEWTtBQUVqQkMsY0FBUTtBQUZTLEtBQW5COztBQUtBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEtBREc7QUFFWEMsY0FBUSxJQUZHO0FBR1hDLHFCQUFlO0FBSEosS0FBYjtBQVhpQjtBQWdCbEI7Ozs7OEJBRVNGLE0sRUFBUTtBQUNoQixXQUFLRyxRQUFMLENBQWMsRUFBQ0YsUUFBUUQsTUFBVCxFQUFpQkUsZUFBZSxPQUFoQyxFQUFkO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxRQUFRLEtBQUtKLFdBQUwsQ0FBaUIsS0FBS0csS0FBTCxDQUFXQyxNQUE1QixDQUFULEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxzQkFBb0IsS0FBS0QsS0FBTCxDQUFXQyxNQUFuQztBQUFBO0FBQXlELGVBQUtELEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkksV0FBbEI7QUFBekQsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFJLFNBQVMsS0FBS0wsS0FBTCxDQUFXRyxhQUF4QixFQUF1QyxXQUFVLFFBQWpEO0FBQTJELGVBQUtILEtBQUwsQ0FBV007QUFBdEUsU0FIRjtBQUlFLDRCQUFDLEtBQUQsSUFBTyxNQUFNLEtBQUtWLElBQWxCLEVBQXdCLFNBQVMsS0FBS0QsT0FBdEM7QUFDQSx3QkFBYyxLQUFLWSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURkO0FBRUEscUJBQVcsS0FBS0MsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRlg7QUFHQSx5QkFBZSxLQUFLUixLQUFMLENBQVdDLE1BSDFCO0FBSkYsT0FERjtBQVdEOzs7O0VBdkNnQlMsTUFBTUMsUyIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb2x1bW5zID0gNztcbiAgICB0aGlzLnJvd3MgPSA2O1xuXG4gICAgdGhpcy5wbGF5ZXJBZnRlciA9IHtcbiAgICAgIHJlZDogJ3llbGxvdycsXG4gICAgICB5ZWxsb3c6ICdyZWQnXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5ZXI6ICdyZWQnLFxuICAgICAgd2lubmVyOiBudWxsLFxuICAgICAgd2lubmVyRGlzcGxheTogXCJub25lXCJcbiAgICB9O1xuICB9XG5cbiAgc2V0V2lubmVyKHBsYXllcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe3dpbm5lcjogcGxheWVyLCB3aW5uZXJEaXNwbGF5OiAnYmxvY2snfSk7XG4gIH1cblxuICB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyOiB0aGlzLnBsYXllckFmdGVyW3RoaXMuc3RhdGUucGxheWVyXX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cbiAgICAgICAgPGgxPkNvbm5lY3QgRm91cjwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2B0dXJucyAke3RoaXMuc3RhdGUucGxheWVyfWB9PllvdXIgVHVybjoge3RoaXMuc3RhdGUucGxheWVyLnRvVXBwZXJDYXNlKCl9PC9oMj5cbiAgICAgICAgPGgyIGRpc3BsYXk9e3RoaXMuc3RhdGUud2lubmVyRGlzcGxheX0gY2xhc3NOYW1lPVwid2lubmVyXCI+e3RoaXMuc3RhdGUud2luTWVzc2FnZX08L2gyPlxuICAgICAgICA8Qm9hcmQgcm93cz17dGhpcy5yb3dzfSBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9IFxuICAgICAgICB0b2dnbGVQbGF5ZXI9e3RoaXMudG9nZ2xlUGxheWVyLmJpbmQodGhpcyl9XG4gICAgICAgIHNldFdpbm5lcj17dGhpcy5zZXRXaW5uZXIuYmluZCh0aGlzKX0gXG4gICAgICAgIGN1cnJlbnRQbGF5ZXI9e3RoaXMuc3RhdGUucGxheWVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==
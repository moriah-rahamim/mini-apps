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
      return React.createElement(Board, { rows: this.rows, columns: this.columns,
        togglePlayer: this.togglePlayer.bind(this),
        setWinner: this.setWinner.bind(this),
        currentPlayer: this.state.player });
    }
  }]);

  return Game;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2dhbWUuanN4Il0sIm5hbWVzIjpbIkdhbWUiLCJwcm9wcyIsImNvbHVtbnMiLCJyb3dzIiwicGxheWVyQWZ0ZXIiLCJyZWQiLCJ5ZWxsb3ciLCJzdGF0ZSIsInBsYXllciIsIndpbm5lciIsInNldFN0YXRlIiwidG9nZ2xlUGxheWVyIiwiYmluZCIsInNldFdpbm5lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLENBQVo7O0FBRUEsVUFBS0MsV0FBTCxHQUFtQjtBQUNqQkMsV0FBSyxRQURZO0FBRWpCQyxjQUFRO0FBRlMsS0FBbkI7O0FBS0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsS0FERztBQUVYQyxjQUFRO0FBRkcsS0FBYjtBQVhpQjtBQWVsQjs7Ozs4QkFFU0QsTSxFQUFRO0FBQ2hCLFdBQUtFLFFBQUwsQ0FBYyxFQUFDRCxRQUFRRCxNQUFULEVBQWQ7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0UsUUFBTCxDQUFjLEVBQUNGLFFBQVEsS0FBS0osV0FBTCxDQUFpQixLQUFLRyxLQUFMLENBQVdDLE1BQTVCLENBQVQsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFLG9CQUFDLEtBQUQsSUFBTyxNQUFNLEtBQUtMLElBQWxCLEVBQXdCLFNBQVMsS0FBS0QsT0FBdEM7QUFDQyxzQkFBYyxLQUFLUyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURmO0FBRUMsbUJBQVcsS0FBS0MsU0FBTCxDQUFlRCxJQUFmLENBQW9CLElBQXBCLENBRlo7QUFHQyx1QkFBZSxLQUFLTCxLQUFMLENBQVdDLE1BSDNCLEdBREY7QUFNRDs7OztFQWpDZ0JNLE1BQU1DLFMiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29sdW1ucyA9IDc7XG4gICAgdGhpcy5yb3dzID0gNjtcblxuICAgIHRoaXMucGxheWVyQWZ0ZXIgPSB7XG4gICAgICByZWQ6ICd5ZWxsb3cnLFxuICAgICAgeWVsbG93OiAncmVkJ1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyOiAncmVkJyxcbiAgICAgIHdpbm5lcjogbnVsbFxuICAgIH07XG4gIH1cblxuICBzZXRXaW5uZXIocGxheWVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7d2lubmVyOiBwbGF5ZXJ9KTtcbiAgfVxuXG4gIHRvZ2dsZVBsYXllcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwbGF5ZXI6IHRoaXMucGxheWVyQWZ0ZXJbdGhpcy5zdGF0ZS5wbGF5ZXJdfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb2FyZCByb3dzPXt0aGlzLnJvd3N9IGNvbHVtbnM9e3RoaXMuY29sdW1uc30gXG4gICAgICAgdG9nZ2xlUGxheWVyPXt0aGlzLnRvZ2dsZVBsYXllci5iaW5kKHRoaXMpfVxuICAgICAgIHNldFdpbm5lcj17dGhpcy5zZXRXaW5uZXIuYmluZCh0aGlzKX0gXG4gICAgICAgY3VycmVudFBsYXllcj17dGhpcy5zdGF0ZS5wbGF5ZXJ9IC8+XG4gICAgKTtcbiAgfVxufSJdfQ==
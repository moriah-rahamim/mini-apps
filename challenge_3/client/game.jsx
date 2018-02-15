class Game extends React.Component {
  constructor(props) {
    super(props);

    this.columns = 7;
    this.rows = 6;

    this.playerAfter = {
      red: 'yellow',
      yellow: 'red'
    };

    this.state = {
      player: 'red',
      winner: null,
      winnerDisplay: "none"
    };
  }

  setWinner(player) {
    this.setState({winner: player, winnerDisplay: 'block'});
  }

  togglePlayer() {
    this.setState({player: this.playerAfter[this.state.player]});
  }

  render() {
    return (
      <div className="game">
        <h1>Connect Four</h1>
        <h2 className={`turns ${this.state.player}`}>Your Turn: {this.state.player.toUpperCase()}</h2>
        <h2 display={this.state.winnerDisplay} className="winner">{this.state.winMessage}</h2>
        <Board rows={this.rows} columns={this.columns} 
        togglePlayer={this.togglePlayer.bind(this)}
        setWinner={this.setWinner.bind(this)} 
        currentPlayer={this.state.player} />
      </div>
    );
  }
}
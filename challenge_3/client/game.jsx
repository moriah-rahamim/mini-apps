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
      winner: null
    };
  }

  setWinner(player) {
    this.setState({winner: player});
  }

  togglePlayer() {
    this.setState({player: this.playerAfter[this.state.player]});
  }

  render() {
    return (
      <Board rows={this.rows} columns={this.columns} 
       togglePlayer={this.togglePlayer.bind(this)}
       setWinner={this.setWinner.bind(this)} 
       currentPlayer={this.state.player} />
    );
  }
}
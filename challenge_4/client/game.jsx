

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scorecard: [],
      frame: 0,
      ball: 0,
      score: 0,
    }
  }

  createScorecardAsync(size) {
    let promise = function(resolve, reject) {
      let score = []
  
      for(let i = 0; i < size; i++) {
        let frame = {
          balls: [null, null],
          special: null,
        };
        score.push(frame);
      }

      this.setStateAsync({'scorecard': score})
      .then((error, result) => resolve(null, result))
      .catch(error => reject(error));
    };
    return new Promise(promise.bind(this));
  }

  setStateAsync(obj) {
    let promise = function(resolve, reject) {
      this.setState(obj, function(error, result) {
        if(error) {
          return reject(error);
        }
        return resolve(null, result);
      });
    };
    return new Promise(promise.bind(this));
  }

  componentWillMount() {
    let game = this;
    this.createScorecardAsync(10)
    // .then(function() {
    //   game.render();
    // });
  }

  createFrames() {
    return this.state.scorecard.map(function(frame, index) {
      return <Frame key={index} round={index} balls={frame.balls}/>
    })
  }

  render() {
    return (
      <div className="scoreboard">
      {this.createFrames()}
      </div>
    );
  }
}
var Frame = (props) => (
  <div className="frame">
    {props.balls.map((ball) => <Ball />)}
  </div>
);
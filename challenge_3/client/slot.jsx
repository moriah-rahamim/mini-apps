var Slot = (props) => (
  <div className="slot">
    {
      props.colArr.map((square, rowNum) => {
        return <Square key={rowNum} player={square || 'empty'} 
                colNum={props.colNum} rowNum={rowNum} />
      })
    }
  </div>
);
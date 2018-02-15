var Slot = (props) => (
  <div className="slot" onClick={() => props.clickSlot(props.colNum)}>
    {
      props.colArr.map((square, rowNum) => {
        return <Square key={rowNum} player={square || 'empty'} 
                colNum={props.colNum} rowNum={rowNum} />
      })
    }
  </div>
);
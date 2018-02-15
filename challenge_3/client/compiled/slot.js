"use strict";

var Slot = function Slot(props) {
  return React.createElement(
    "div",
    { className: "slot", onClick: function onClick() {
        return props.clickSlot(props.colNum);
      } },
    props.colArr.map(function (square, rowNum) {
      return React.createElement(Square, { key: rowNum, player: square || 'empty',
        colNum: props.colNum, rowNum: rowNum });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nsb3QuanN4Il0sIm5hbWVzIjpbIlNsb3QiLCJwcm9wcyIsImNsaWNrU2xvdCIsImNvbE51bSIsImNvbEFyciIsIm1hcCIsInNxdWFyZSIsInJvd051bSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Q7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmLEVBQXNCLFNBQVM7QUFBQSxlQUFNQSxNQUFNQyxTQUFOLENBQWdCRCxNQUFNRSxNQUF0QixDQUFOO0FBQUEsT0FBL0I7QUFFSUYsVUFBTUcsTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUNuQyxhQUFPLG9CQUFDLE1BQUQsSUFBUSxLQUFLQSxNQUFiLEVBQXFCLFFBQVFELFVBQVUsT0FBdkM7QUFDQyxnQkFBUUwsTUFBTUUsTUFEZixFQUN1QixRQUFRSSxNQUQvQixHQUFQO0FBRUQsS0FIRDtBQUZKLEdBRFM7QUFBQSxDQUFYIiwiZmlsZSI6InNsb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2xvdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNsb3RcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbGlja1Nsb3QocHJvcHMuY29sTnVtKX0+XG4gICAge1xuICAgICAgcHJvcHMuY29sQXJyLm1hcCgoc3F1YXJlLCByb3dOdW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUga2V5PXtyb3dOdW19IHBsYXllcj17c3F1YXJlIHx8ICdlbXB0eSd9IFxuICAgICAgICAgICAgICAgIGNvbE51bT17cHJvcHMuY29sTnVtfSByb3dOdW09e3Jvd051bX0gLz5cbiAgICAgIH0pXG4gICAgfVxuICA8L2Rpdj5cbik7Il19
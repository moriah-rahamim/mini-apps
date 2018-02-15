"use strict";

var Slot = function Slot(props) {
  return React.createElement(
    "div",
    { className: "slot" },
    props.colArr.map(function (square, rowNum) {
      return React.createElement(Square, { key: rowNum, player: square || 'empty',
        colNum: props.colNum, rowNum: rowNum });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Nsb3QuanN4Il0sIm5hbWVzIjpbIlNsb3QiLCJwcm9wcyIsImNvbEFyciIsIm1hcCIsInNxdWFyZSIsInJvd051bSIsImNvbE51bSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLFNBQ1Q7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmO0FBRUlBLFVBQU1DLE1BQU4sQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDbkMsYUFBTyxvQkFBQyxNQUFELElBQVEsS0FBS0EsTUFBYixFQUFxQixRQUFRRCxVQUFVLE9BQXZDO0FBQ0MsZ0JBQVFILE1BQU1LLE1BRGYsRUFDdUIsUUFBUUQsTUFEL0IsR0FBUDtBQUVELEtBSEQ7QUFGSixHQURTO0FBQUEsQ0FBWCIsImZpbGUiOiJzbG90LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNsb3QgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzbG90XCI+XG4gICAge1xuICAgICAgcHJvcHMuY29sQXJyLm1hcCgoc3F1YXJlLCByb3dOdW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxTcXVhcmUga2V5PXtyb3dOdW19IHBsYXllcj17c3F1YXJlIHx8ICdlbXB0eSd9IFxuICAgICAgICAgICAgICAgIGNvbE51bT17cHJvcHMuY29sTnVtfSByb3dOdW09e3Jvd051bX0gLz5cbiAgICAgIH0pXG4gICAgfVxuICA8L2Rpdj5cbik7Il19
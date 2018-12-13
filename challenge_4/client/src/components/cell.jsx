import React from 'react';

const cellStyle = {
  padding: "auto",
  width: "14.3%",
  height: "70px",
  background: "white",
  borderRadius: "50%"
}

const Cell = ({x, y}) => (
  <td style={cellStyle} x={x} y={y} ></td>
);

export default Cell;
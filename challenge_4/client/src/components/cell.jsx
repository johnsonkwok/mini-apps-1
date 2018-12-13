import React from 'react';

const cellStyle = {
  width: '10px'
}

const Cell = ({x, y}) => (
  <td style={cellStyle} x={x} y={y} ></td>
);

export default Cell;
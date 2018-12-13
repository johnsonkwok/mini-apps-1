import React from 'react';
import Cell from './cell.jsx';

const rowStyle = {
  height: "50px"
}

const Row = ({x}) => (
    <tr style={rowStyle}>
      {[...Array(7)].map((cell, i) => <Cell key={i} x={x} y={i} />)}
    </tr>
);

export default Row;
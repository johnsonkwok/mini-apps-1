import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boardStyle = {
      width: "560px",
      height: "480px",
      background: "#2945c9",
      whiteSpace: "pre-wrap"
    };
    return (
        <table style={boardStyle}>
          <tbody>
            {[...Array(6)].map((row, i) => (<Row key={i} x={i} />))}
          </tbody>
        </table>
    );
  }
}

export default Board;
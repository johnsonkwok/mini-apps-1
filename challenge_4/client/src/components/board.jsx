import React from 'react';
import Row from './row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boardStyle = {
      width: "50%",
      background: "#2945c9",
      whiteSpace: "pre-wrap"
    };
    return (
      <div style={boardStyle}>
        <table>
          <tbody>
            {[...Array(6)].map((row, i) => (<Row key={i} x={i} />))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
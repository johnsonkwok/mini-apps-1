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
    const {state, updBoard} = this.props;
    return (
        <table style={boardStyle}>
          <tbody>
            {[...Array(6)].map((row, i) => (<Row key={i} x={i} state={state} updBoard={updBoard} />))}
          </tbody>
        </table>
    );
  }
}

export default Board;
import React from 'react';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPlayer: true,
      '0': [0, 0, 0, 0, 0, 0, 0],
      '1': [0, 0, 0, 0, 0, 0, 0],
      '2': [0, 0, 0, 0, 0, 0, 0],
      '3': [0, 0, 0, 0, 0, 0, 0],
      '4': [0, 0, 0, 0, 0, 0, 0],
      '5': [0, 0, 0, 0, 0, 0, 0],
    }
    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard(x, y) {
    // let cell = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
    let move = this.state.currPlayer ? 1 : 2;
    const updatedRow = this.state[x].slice();
    updatedRow[y] = move;
    this.setState({
      currPlayer: !this.state.currPlayer,
      [x]: updatedRow
    });
  }

  render() {
    console.log(this.state);
    return(
      <Board updBoard={this.updateBoard} />
    );
  }
}

export default App;


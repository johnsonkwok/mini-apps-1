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
    this.detectGameEnd = this.detectGameEnd.bind(this);
  }

  updateBoard(x, y) {
    // let cell = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
    let move = this.state.currPlayer ? 1 : 2;
    let currRow = 5;
    while (this.state[currRow][y] !== 0 && currRow > 0) {
      currRow--;
    }

    const updatedRow = this.state[currRow].slice();
    updatedRow[y] = move;
    if (this.state['0'][y] === 0) {
      this.setState({
        currPlayer: !this.state.currPlayer,
        [currRow]: updatedRow
      });
    }
  }

  detectGameEnd() {
    if (detectHorizWin() || detectVertWin() || detectDiagWin()) {
      
    }
    
    function detectHorizWin() {

    }

    function detectVertWin() {

    }

    function detectDiagWin() {

    }
  }

  render() {
    return(
      <Board updBoard={this.updateBoard} state={this.state} onChange={this.detectGameEnd} />
    );
  }
}

export default App;


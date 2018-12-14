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
    let winner = 'TIE!';
    
    const detectHorizWin = () => {
      let gameOver = false;
      for (let i = 5; i >= 0; i--) {
        let pieces = '';
        if (!gameOver) {
          for (let j = 0; j < this.state[i].length; j++) {
            let currPosition = this.state[i][j];
            pieces += currPosition;
          }
          if (pieces.includes('1111')) {
            gameOver = true;
            winner = 'PLAYER 1 (RED)';
          } else if (pieces.includes('2222')) {
            gameOver = true;
            winner = 'PLAYER 2 (YELLOW)';
          }
        }
      }
      return gameOver;
    }  
    
    const detectVertWin = () => {
      let gameOver = false;
      for (let i = 6; i >= 0; i--) {
        let pieces = '';
        if (!gameOver) {
          for (let j = 0; j < 6; j++) {
            let currPosition = this.state[j][i];
            pieces += currPosition;
          }
          if (pieces.includes('1111')) {
            gameOver = true;
            winner = 'PLAYER 1 (RED)';
          } else if (pieces.includes('2222')) {
            gameOver = true;
            winner = 'PLAYER 2 (YELLOW)';
          }
        }
      }
      return gameOver;
    };
    
    const detectMajorDiagWin = () => {
      let gameOver = false;
      for (let i = -2; i <= 3; i++) {
        let pieces = '';
        if (!gameOver) {
          let c = i;
          let r = 0;
          while (r <= 5 && c <= 6) {
            let currPosition = this.state[r][c];
            pieces += currPosition || '0';
            c++;
            r++;
          }
          if (pieces.includes('1111')) {
            gameOver = true;
            winner = 'PLAYER 1 (RED)';
          } else if (pieces.includes('2222')) {
            gameOver = true;
            winner = 'PLAYER 2 (YELLOW)';
          }
        }
      }
      return gameOver;
    }

    const detectMinorDiagWin = () => {
      let gameOver = false;
      for (let i = 8; i >= 0; i--) {
        let pieces = '';
        if (!gameOver) {
          let c = i;
          let r = 0;
          while (r <= 5 && c >= 0) {
            let currPosition = this.state[r][c];
            pieces += currPosition || '0';
            c--;
            r++;
          }
          if (pieces.includes('1111')) {
            gameOver = true;
            winner = 'PLAYER 1 (RED)';
          } else if (pieces.includes('2222')) {
            gameOver = true;
            winner = 'PLAYER 2 (YELLOW)';
          }
        }
      }
      return gameOver;
    };

    if (detectHorizWin() || detectVertWin() || detectMajorDiagWin() || detectMinorDiagWin()) {
      return winner;
    } else {
      return false;
    }
  }

  render() {
    let page = null;
    let winner = this.detectGameEnd();
    if (!!winner) {
      page = (<div><h1>{`${winner} WINS!`}</h1></div>);
    } else if (this.state['0'].every(y => (y !== 0))) {
      page = (<div><h1>{'TIE!'}</h1></div>);
    }
    return(
      <div>
        <Board updBoard={this.updateBoard} state={this.state} />
        {page}
      </div>
    );
  }
}

export default App;


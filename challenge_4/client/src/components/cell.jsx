import React, { Component } from 'react';

const cellStyle = {
  padding: "auto",
  width: "14.3%",
  height: "70px",
  background: "white",
  borderRadius: "50%"
}

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({x, y}) {
    return () => {
      this.props.updBoard(x, y);
    }
  }

  render() {
    const {x, y} = this.props;
    return (
      <td style={cellStyle} data-x={x} data-y={y} onClick={this.handleClick(this.props)}></td>
    );
  }
}

export default Cell;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.displayButton = this.displayButton.bind(this);
    this.state = {
      button: (<button type="button" id="checkout" onClick={this.displayButton}>Checkout</button>),
      viewBtn: true
    };
  }

  displayButton() {
    this.setState({
      viewBtn: !this.state.viewBtn
    });
  }

  render() {
    return (this.state.viewBtn ? this.state.button : <FormF1 />);
  }
}

class FormF1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action=""></form>
    );
  }
}

class FormF2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action=""></form>
    );
  }
}

class FormF3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action=""></form>
    );
  }
}



ReactDOM.render(<Button />, document.getElementById('home'));


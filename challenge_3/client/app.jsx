
const checkout = () => (
  <FormF1 />
);

const Button = (props) => (
  <button type="button" id="checkout" onClick={checkout}>Checkout</button>
);

class FormF1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2>works!</h2>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById('home'));


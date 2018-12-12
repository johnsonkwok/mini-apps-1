
class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayButton = this.displayButton.bind(this);
    this.state = {
      viewBtn: true
    };
  }

  displayButton() {
    this.setState({
      viewBtn: !this.state.viewBtn
    });
  }

  render() {
    const btn = (<button type="button" id="checkout" onClick={this.displayButton}>Checkout</button>);
    return (this.state.viewBtn ? btn : <FormF1 />);
  }
}

class FormF1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleF1Submit = this.handleF1Submit.bind(this);
    this.displayForm1 = this.displayForm1.bind(this);
    this.state = {
      viewForm1: true,
      name: '',
      email: '',
      password: ''
    }
  }

  handleF1Submit(e) {
    e.preventDefault();
    console.log('phase 1...');
  }

  displayForm1() {
    this.setState({
      viewForm1: !this.state.viewForm1
    });
  }

  render() {
    const form1 = (
      <form onSubmit={this.handleF1Submit}>
        <fieldset>
          <legend>Create Account</legend>
          <label>Name:
            <input type="text" name="name" />
          </label><br />
          <label>Email:
            <input type="email" name="email" />
          </label><br />
          <label>Password:
            <input type="password" name="password" />
          </label><br />
          <input type="submit" value="Next" onClick={this.displayForm1} />
          </fieldset>
      </form>
    );
    return (this.state.viewForm1 ? form1 : <FormF2 />);
  }
}

class FormF2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleF2Submit = this.handleF2Submit.bind(this);
    this.displayForm2 = this.displayForm2.bind(this);
    this.state = {
      viewForm2: true,
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
  }

  handleF2Submit(e) {
    e.preventDefault();
    console.log('phase 2...');
  }

  displayForm2() {
    this.setState({
      viewForm2: !this.state.viewForm2
    });
  }

  render() {
    const form2 = (
      <form onSubmit={this.handleF2Submit}>
        <fieldset>
          <legend>Shipping Information</legend>
          <label>Address Line 1:
            <input type="text" name="address1" />
          </label><br />
          <label>Address Line 2:
            <input type="text" name="address2" />
          </label><br />
          <label>City:
            <input type="text" name="city" />
          </label>
          <label>State:
            <input type="text" name="state" placeholder="two-letter state code"/>
          </label><br />
          <label>Zip Code:
            <input type="number" name="zip" placeholder="five-digit zip code"/>
          </label><br />
          <label>Phone Number:
            <input type="number" name="state" placeholder="numbers only"/>
          </label><br />
          <input type="submit" value="Next" onClick={this.displayForm2} />
          </fieldset>
      </form>
    );
    return (this.state.viewForm2 ? form2 : <FormF3 />);
  }
}

class FormF3 extends React.Component {
  constructor(props) {
    super(props);
    this.handleF3Submit = this.handleF3Submit.bind(this);
    this.displayForm3 = this.displayForm3.bind(this);
    this.state = {
      viewForm3: true,
      ccNum: '',
      expiry: '',
      cvv: '',
      billingZip: ''
    }
  }

  handleF3Submit(e) {
    e.preventDefault();
    console.log('phase 2...');
  }

  displayForm3() {
    this.setState({
      viewForm3: !this.state.viewForm3
    });
  }

  render() {
    const form3 = (
      <form onSubmit={this.handleF3Submit}>
        <fieldset>
          <legend>Payment Information</legend>
          <label>Credit Card Number:
            <input type="number" name="ccNum" placeholder="numbers only" />
          </label><br />
          <label>Expiration Date:
            <input type="text" name="expiry" placeholder="XX/XX" />
          </label><br />
          <label>CVV Code:
            <input type="number" name="cvv" />
          </label><br />
          <label>Billing Zip Code:
            <input type="number" name="zip" placeholder="five-digit zip code"/>
          </label><br />
          <input type="submit" value="Purchase" onClick={this.displayForm3} />
          </fieldset>
      </form>
    );
    return (this.state.viewForm3 ? form3 : <App />);
  }
}



ReactDOM.render(<App />, document.getElementById('home'));


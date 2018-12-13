

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
    this.handleF1Change = this.handleF1Change.bind(this);
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
    $.ajax({
      url: '/account',
      type: 'POST',
      data: JSON.stringify(this.state), 
      contentType: 'application/json',
      success: () => (console.log('Form 1 Submitted.'))
    });
    this.displayForm1();
  }

  handleF1Change() {
    this.setState({
      name: $('#name').val(),
      email: $('#email').val(),
      password: $('#password').val()
    });
  }

  displayForm1() {
    this.setState({
      viewForm1: !this.state.viewForm1
    });
  }

  render() {
    const form1 = (
      <form onChange={this.handleF1Change}>
        <fieldset>
          <legend>Create Account</legend>
          <label>Name:
            <input type="text" id="name" />
          </label><br />
          <label>Email:
            <input type="email" id="email" />
          </label><br />
          <label>Password:
            <input type="password" id="password" />
          </label><br />
          <input type="button" value="Next" onClick={this.handleF1Submit} />
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
    this.handleF2Change = this.handleF2Change.bind(this)
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
    $.ajax({
      url: '/shipping', 
      type: 'POST',
      data: JSON.stringify(this.state), 
      contentType: 'application/json',
      success: () => (console.log('Form 2 Submitted.'))
    });
    this.displayForm2();
  }

  handleF2Change() {
    this.setState({
      address1: $('#address1').val(),
      address2: $('#address2').val(),
      city: $('#city').val(),
      state: $('#state').val(),
      zip: $('#zip').val(),
      phone: $('#phone').val()
    });
  }

  displayForm2() {
    this.setState({
      viewForm2: !this.state.viewForm2
    });
  }

  render() {
    const form2 = (
      <form onChange={this.handleF2Change}>
        <fieldset>
          <legend>Shipping Information</legend>
          <label>Address Line 1:
            <input type="text" id="address1" />
          </label><br />
          <label>Address Line 2:
            <input type="text" id="address2" />
          </label><br />
          <label>City:
            <input type="text" id="city" />
          </label>
          <label>State:
            <input type="text" id="state" placeholder="two-letter state code"/>
          </label><br />
          <label>Zip Code:
            <input type="number" id="zip" placeholder="five-digit zip code"/>
          </label><br />
          <label>Phone Number:
            <input type="number" id="phone" placeholder="numbers only"/>
          </label><br />
          <input type="button" value="Next" onClick={this.handleF2Submit} />
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
    this.handleF3Change = this.handleF3Change.bind(this)
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
    $.ajax({
      url: '/payment', 
      type: 'POST',
      data: JSON.stringify(this.state), 
      contentType: 'application/json',
      success: () => (console.log('Form 3 Submitted.'))
    });
    this.displayForm3();
  }

  handleF3Change() {
    this.setState({
      ccNum: $('#ccNum').val(),
      expiry: $('#expiry').val(),
      cvv: $('#cvv').val(),
      billingZip: $('#billingZip').val()
    });
  }

  displayForm3() {
    this.setState({
      viewForm3: !this.state.viewForm3
    });
  }

  render() {
    const form3 = (
      <form onChange={this.handleF3Change}>
        <fieldset>
          <legend>Payment Information</legend>
          <label>Credit Card Number:
            <input type="number" id="ccNum" placeholder="numbers only" />
          </label><br />
          <label>Expiration Date:
            <input type="text" id="expiry" placeholder="XX/XX" />
          </label><br />
          <label>CVV Code:
            <input type="number" id="cvv" />
          </label><br />
          <label>Billing Zip Code:
            <input type="number" id="billingZip" placeholder="five-digit zip code"/>
          </label><br />
          <input type="button" value="Purchase" onClick={this.handleF3Submit} />
          </fieldset>
      </form>
    );
    return (this.state.viewForm3 ? form3 : <App />);
  }
}



ReactDOM.render(<App />, document.getElementById('root'));


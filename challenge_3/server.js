const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');


app.use(express.static('./public'));
app.use(bodyParser.json());

app.post('/account', (req, res) => {
  let {name, email, password} = req.body;
  
});

app.post('/shipping', (req, res) => {
  let {address1, address2, city, state, zip, phone} = req.body;

});

app.post('/payment', (req, res) => {
  let {ccNum, expiry, cvv, billingZip} = req.body;
  
});

const port = 3000;
app.listen(port, () => {console.log(`App listening on port ${port}`)});
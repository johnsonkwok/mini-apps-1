const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');

app.use(express.static('./public'));
app.use(bodyParser.json());

let currId = 0;

app.post('/account', (req, res) => {
  let {name, email, password} = req.body;
  let query = 'INSERT INTO customers (name, email, password) VALUES (?, ?, ?)';
  let queryArgs = [name, email, password];
  
  db.query(query, queryArgs, (err, results) => {
    if (err) { 
      console.error(err);
      res.sendStatus(501);  
    } else {
      currId = results.insertId;
      res.sendStatus(201);
    }
  });
});

app.post('/shipping', (req, res) => {
  let {address1, address2, city, state, zip, phone} = req.body;
  let query = 'UPDATE customers SET address1=?, address2=?, city=?, state=?, zip=?, phone=? WHERE id=?';
  let queryArgs = [address1, address2, city, state, zip, phone, currId];
  
  db.query(query, queryArgs, (err, results) => {
    if (err) { 
      console.error(err);
      res.sendStatus(501);  
    } else {
      res.sendStatus(201);
    }
  });
});

app.post('/payment', (req, res) => {
  let {ccNum, expiry, cvv, billingZip} = req.body;
  let query = 'UPDATE customers SET cc_num=?, expiry_date=?, cvv=?, billing_zip=? WHERE id=?';
  let queryArgs = [ccNum, expiry, cvv, billingZip, currId];
  
  db.query(query, queryArgs, (err, results) => {
    if (err) { 
      console.error(err);
      res.sendStatus(501);  
    } else {
      res.sendStatus(201);
    }
  });
});

const port = 3000;
app.listen(port, () => {console.log(`App listening on port ${port}`)});
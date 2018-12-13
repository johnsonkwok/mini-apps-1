const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('./public'));
app.use(bodyParser.json());

app.post('/customers', (req, res) => {
  console.log(req.body);
  res.end();
});


app.listen(port, () => {console.log(`App listening on port ${port}`)});
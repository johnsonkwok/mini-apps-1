const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('./public'));

app.post('/customers', (req, res) => {
  
});


app.listen(port, () => {console.log(`App listening on port ${port}`)});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('./public'));
app.listen(port, () => {console.log(`App listening on port ${port}`)});

app.get('/', (req, res) => {
  console.log('cool');
});





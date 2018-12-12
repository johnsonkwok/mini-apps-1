const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname + '/client')));
app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
const port = 3000;

const convertJSONtoCSV = function(body) {
  const columnTitles = Object.keys(body).slice(0, -1).join(',');
  const csvReport = [columnTitles];
  
  const createRow = function(person) {
    const info = [];
    for (let key in person) {
      if (key !== 'children') {
        info.push(person[key]); 
      }
    }
    return info.join(',');
  }
  
  const addPeopleToReport = function(person) {
    csvReport.push(createRow(person));
    if (person.children.length === 0) {
      return;
    } else {
      for (let i = 0; i < person.children.length; i++) {
        addPeopleToReport(person.children[i]);
      }
    }
  };
  
  addPeopleToReport(body);
  return csvReport.join('<br>');
};

let totalCsv = '';
app.post('/generate_csv', (req, res) => {
  let body = JSON.parse(req.body.report);
  const csv = convertJSONtoCSV(body);
  totalCsv += csv;
  res.render(__dirname + '/client/view.ejs', {totalCsv: totalCsv});
});

app.listen(port, () => console.log(`App listening on port ${port}`));


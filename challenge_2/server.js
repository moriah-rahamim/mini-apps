const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());

// *****************************************************************************
// CONTROLLER
// *****************************************************************************
app.post('/', (request, response) => {
  let csv = services.objToCsv(request.body); // already an object
  response.send(csv);
});

// *****************************************************************************
// MODEL
// *****************************************************************************
class Services {
  constructor() {}

  _getCsvHeaders(obj) {
    let headers = [];
    for (let key in obj) {
      if (key !== 'children') {
        headers.push(key);
      }
    }
    return headers;
  }

  _getCsvData (obj, headers) {
    var rowArr = [];

    headers.forEach((colName) => {
      rowArr.push(obj[colName]);
    });
    var csv = rowArr.join(',');

    // if children, recurse and concat. else just return this row
    if (obj.children) {
      obj.children.forEach((child) => {
        csv += '\n' + this._getCsvData(child, headers);
      });
    }
    return csv;
  }

  objToCsv(obj) {
    let headersArr = this._getCsvHeaders(obj);
    let headersCsv = headersArr.join(',');
    let bodyCsv = this._getCsvData(obj, headersArr);

    let csvFull = headersCsv + '\n' + bodyCsv;

    return(csvFull);
  }
};

// *****************************************************************************
// INIT
// *****************************************************************************

var services = new Services();
app.listen(8000, () => console.log('listening on localhost:8000!'));

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'client')));

app.listen(8000, () => console.log('listening on localhost:8000!'))
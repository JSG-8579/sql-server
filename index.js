const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path: '.env'})

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));

const test = require('./router/test.js');
const push = require('./router/push.js');
const camera = require('./router/camera.js');
const vue = require('./router/vuetest.js');
const sudoku = require('./router/sudoku.js');

app.use('/', test);
app.use('/push', push);
app.use('/camera', camera);
app.use('/vue', vue);
app.use('/sudoku', sudoku);


app.listen(3000)


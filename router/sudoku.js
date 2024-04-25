const sudokuRouter = require('express').Router();
const query = require('../lib/db2');

sudokuRouter.get('/', async function (req, res) {
    const data = await query.queryExecute('SELECT * FROM member');
    console.log('fasfsad', data)
    res.send(data);
})



sudokuRouter.post('/', async function (req, res) {
  const {difficult, name, time} = req.body;
  // console.log('name',name)
  const data = await query.queryExecute(`insert into member (difficult, name, time) values (?,?,?)`,[difficult, name, time]) //추가
  console.log('======',data)
  res.send(data);
})


  module.exports = sudokuRouter;
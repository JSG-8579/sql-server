const vueRouter = require('express').Router();
const query = require('../lib/db2');

vueRouter.get('/', async function (req, res) {
    const data = await query.queryExecute('SELECT * FROM member');
    // console.log('fasfsad', data)
    res.send(data);
})



vueRouter.post('/', async function (req, res) {
  const {name, time} = req.body;
  // console.log('name',name)
  const data = await query.queryExecute(`insert into member (name, time) values (?,?)`,[name, time]) //추가
  console.log('======',data)
  res.send(data);
})


  module.exports = vueRouter;
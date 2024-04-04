const vueRouter = require('express').Router();
const query = require('../lib/db');

vueRouter.get('/', async function (req, res) {
    const data = await query.queryExecute('SELECT * FROM member2');
    // console.log('fasfsad', data)
    res.send(data);
})



vueRouter.post('/', async function (req, res) {
  const {name, email} = req.body;
  // console.log('name',name)
  const data = await query.queryExecute(`insert into member2 (name, email) values (?,?)`,[name, email]) //추가
  console.log('======',data)
  res.send(data);
})

vueRouter.put('/update', async function (req, res) {
  // const {num} = req.query;
  const {num, name, email} = req.body;
  // console.log('======',req.body)
  // console.log('name',name)
  const data = await query.queryExecute(`update member2 set name=?, email=? where num=?`,[name, email, num]) //추가
  
  res.send(data);
})

vueRouter.delete('/delete', async function (req, res) {
  const {num} = req.query;
  // console.log('name',name)
  console.log('======',num)
  const data = await query.queryExecute(`delete from member2 where num=?`,[num]) //추가
  res.send(data);
})

vueRouter.get('/create', async function (req, res) {
  const q = `
    CREATE TABLE test.member(
      num INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(20),
      email VARCHAR(100),
      PRIMARY KEY(num)
    )
  `;
  // console.log('name',name)
  // console.log('======',num)
  const data = await query.queryExecute(q,[]) //추가
  res.send('테이블 생성완료');
})

  module.exports = vueRouter;